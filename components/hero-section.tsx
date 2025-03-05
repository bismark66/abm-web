import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white hero-pattern pt-20 pb-20 md:pt-24 md:pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12  items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Fast, Reliable Courier Services for Your Business
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We deliver your packages with speed, security, and a smile.
                Connect with customers worldwide through our trusted courier
                network.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gradient-bg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Courier delivery illustration"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Abstract wave shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
