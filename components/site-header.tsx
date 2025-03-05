"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import Image from "next/image";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4 px-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          {/* <Package className="h-6 w-6 text-primary" /> */}
          <span className="text-xl font-bold text-primary">
            <Image
              src="/assets/abm1.png"
              alt="Company Logo"
              width={100}
              height={10}
              style={{ height: "auto" }}
            />
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center gap-6 ${
            isScrolled ? "text-black" : ""
          }`}
        >
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#benefits"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log In
          </Button>
          <Button size="sm" className="gradient-bg">
            Get Started
          </Button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            {/* <div className="flex flex-col gap-2 pt-2 border-t">
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm" className="gradient-bg">
                Get Started
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
