"use client";

import { MainURL } from "@/components/layout/SiteURL";
import { useCart } from "@/context/CartContext";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const SiteURL = MainURL.mainUrl

  const { cart } = useCart();
  const cartCount =
    cart?.reduce((total, item) => total + item.quantity, 0) || 0;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const isActivePath = (path: string) => pathname === path;

  const navItems = [{ href: "#home", label: "Home" }];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#0F172B]`}
    >
      <div className="container mx-auto px-6 sm:px-6 py-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 lg:space-x-6">
            <Link
              href={SiteURL}
              aria-label="Toranj Antique Gallery"
              className="flex items-center space-x-0 text-2xl text-gray-50 transition-colors
                   ml-2 sm:ml-4 lg:ml-17">
              <span>
                <img src="/images/favicon/logo.png" alt="Toranj Gallery Logo" className="w-[65px] h-[65px]"/>
              </span>
              <span className="font-bold text-[#F59E0B] text-[18px]">
                Toranj Antique Gallery
              </span>
            </Link>

            <nav
              className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  id={href}
                  className={`relative py-2 px-4 rounded-lg text-[#FFFFFF] text-[15.6px] font-medium transition-all duration-200`}
                  aria-current={isActivePath(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          

          <div className="flex items-center space-x-2 sm:space-x-4">
            

            
            <Link
              href="/"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="h-6 w-6 text-[#FFFFFF] group-hover:text-gray-700 transition-colors" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

          
          </div>
        </div>

        

        
      </div>
    </header>
  );
}
