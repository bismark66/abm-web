import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "SwiftCourier has transformed our logistics operations. Their reliable service and real-time tracking have significantly improved our customer satisfaction rates.",
      author: "Sarah Johnson",
      role: "Operations Manager, TechRetail Inc.",
      avatar: "SJ",
      rating: 5,
    },
    {
      quote:
        "As an e-commerce business, delivery reliability is crucial. SwiftCourier has been our trusted partner for over 3 years, consistently delivering on time and with care.",
      author: "Michael Chen",
      role: "Founder, StyleBox",
      avatar: "MC",
      rating: 5,
    },
    {
      quote:
        "The customer service is exceptional. When we had an urgent delivery need on a holiday, the team went above and beyond to make it happen.",
      author: "Priya Patel",
      role: "Logistics Coordinator, Global Imports",
      avatar: "PP",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by Businesses Worldwide
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to
              say about our services.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Industry Recognition</h3>
            <p className="text-gray-500">
              Our commitment to excellence has earned us recognition in the
              logistics industry
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">
                Best Courier Service 2024
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">
                Security Excellence Award
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"></path>
                  <path d="M3 8a9 9 0 0 1 9-9 9 9 0 0 1 6.4 15.4"></path>
                  <path d="M17 16l.7.7a1 1 0 0 0 1.4 0l3.6-3.6a1 1 0 0 0 0-1.4L21 10"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">
                Eco-Friendly Logistics 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
