import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "Real-time package tracking",
    "Automated delivery notifications",
    "Flexible pickup scheduling",
    "Specialized handling for fragile items",
    "Insurance options for valuable shipments",
    "Eco-friendly delivery options",
  ];

  return (
    <section id="benefits" className="w-full bg-black py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Courier service technology"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Technical Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Advanced Technology for Seamless Deliveries
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our cutting-edge logistics platform ensures efficient routing,
                real-time tracking, and seamless communication throughout the
                delivery process.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
