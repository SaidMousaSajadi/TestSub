"use client";

import { MainURL } from "@/components/layout/SiteURL";
import {
  ArrowRight,
  Facebook,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function Footer() {
  const SiteURL = MainURL.mainUrl

  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", email);
      setEmail("");
    }
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { href: "#home", label: "Markets" }
      ],
    },
    {
      title: "Company",
      links: [
        { href: SiteURL, label: "About Us" }
      ],
    },
    {
      title: "Contact us",
      links: [
        { href: "https://www.facebook.com/Toranj2023/", label: "Marketing" },
        { href: "https://www.linkedin.com/in/elahe-shahrian/", label: "Web Development" }
      ],
    }
  ];

  const socialLinks = [
    { href: "https://elaheshahrian.linkedin.com", icon: Linkedin, label: "Linkedin" },
    { href: "https://elaheshahrian.github.io", icon: Github, label: "GitHub" },
    { href: "#", icon: Instagram, label: "Instagram" },
    
  ];

  return (
    <footer className="bg-[#0F172B] border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-25">
        

        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <Link
                className="text-[23px] font-bold md-5 text-white hover:text-primary transition-colors"
                href={SiteURL}
                aria-label="Toranj Shop Home"
              >
                Toranj Antique Gallery<span className="text-primary"></span>
              </Link>
              <p className="text-muted-foreground text-white mt-6 mb-6 max-w-sm text-[15.6px]">
                The rich heritage of Persia
              </p>

              <div className="space-y-3 mt-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-white text-[15.6px]">support@toranjgallery.ca</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-white text-[15.6px]">+1 (306) 351-0680</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-white text-[15.6px]">Regina, Saskatchewan, Canada</span>
                </div>
                
              </div>

              
            </div>

            {footerSections.map((section, index) => (
              <div
                key={section.title}
                className={`${index >= 2 ? "lg:col-span-1" : ""}`}
              >
                <h4 className="text-[19.5px] font-bold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.65px] text-white hover:text-primary transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </footer>
  );
}
