import {
  Truck,
  Clock,
  DollarSign,
  Shield,
  MapPin,
  BarChart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Reliable Delivery",
      description:
        "Our extensive network ensures your packages arrive safely and on time, every time.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Express Shipping",
      description:
        "Need it there fast? Our express options guarantee delivery within 24 hours.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Affordable Rates",
      description:
        "Competitive pricing with no hidden fees. Pay only for what you need.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Handling",
      description:
        "Advanced tracking and secure handling protocols protect your valuable shipments.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Global Reach",
      description:
        "Deliver to over 200 countries with our international shipping network.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Business Solutions",
      description:
        "Tailored logistics solutions for businesses of all sizes with volume discounts.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-50 py-16 md:py-24 flex justify-center items-center min-h-screen"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Everything You Need in a Courier Service
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
              We combine speed, reliability, and customer service to deliver the
              best courier experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow text-center w-full"
            >
              <CardHeader className="flex flex-col items-center">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
