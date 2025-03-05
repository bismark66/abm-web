import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { ChatWidget } from "@/components/ui/chat-widget";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center flex-col">
      <SiteHeader />
      <main className="flex-1 w-full">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
