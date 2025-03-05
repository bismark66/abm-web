"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! How can I help you with your delivery needs today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help with that! Could you provide more details?",
        "Thanks for your inquiry. Our team will process your request shortly.",
        "We offer express delivery for that service. Would you like to know more?",
        "I understand your needs. Let me connect you with our specialist team.",
        "We can definitely arrange that delivery for you. When would you prefer it to be picked up?",
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleEndChat = () => {
    toast({
      title: "Chat session ended",
      description: "A transcript has been sent to our team. We'll be in touch soon!",
    });
    setIsOpen(false);
    setMessages(initialMessages);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg gradient-bg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 shadow-xl border-primary/10 z-50">
          <CardHeader className="gradient-bg text-white rounded-t-lg flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-base font-medium">SwiftCourier Support</CardTitle>
            <X 
              className="h-5 w-5 cursor-pointer hover:opacity-75 transition-opacity" 
              onClick={() => setIsOpen(false)}
            />
          </CardHeader>
          <CardContent className="p-4 h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex flex-col gap-2">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button size="icon" onClick={handleSend} className="gradient-bg">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full text-xs"
              onClick={handleEndChat}
            >
              End Chat & Send Transcript
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}