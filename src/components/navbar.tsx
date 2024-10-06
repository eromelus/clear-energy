"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Add ChevronDown import
import { useScroll } from "@/contexts/ScrollContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { scrollToContactForm } = useScroll();

  return (
    <nav className="relative z-10 bg-white mt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:flex md:flex-shrink-0 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Clear Energy Partners logo"
                width={160}
                height={40}
                style={{ width: "auto", height: "auto", maxHeight: "40px" }}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-2">
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold"
              >
                Decommissioning
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold"
              >
                Recycling
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-bold"
              >
                About Us
              </Link>
              <div className="relative">
                <button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold flex items-center"
                >
                  All Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-none shadow-sm bg-white ring-2 ring-navy ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-navy hover:bg-gray-100"
                        role="menuitem"
                      >
                        OEM Replacements
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-navy hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sell Excess Inventory
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={scrollToContactForm}
                className="bg-white text-navy hover:bg-gray-100 px-4 py-3 text-sm font-bold border-2 border-navy"
              >
                Contact Us
              </button>
              <Link
                href="https://clearenergypartners.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-orange text-white hover:bg-orange-400 px-4 py-3 text-sm font-bold border-2 border-orange"
              >
                Store
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:absolute md:top-16 md:left-0 md:w-64 md:bg-white md:shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-bold"
            >
              Decommissioning
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-bold"
            >
              Recycling
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-bold"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-bold"
            >
              All Services
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 md:hidden">
            <div className="flex items-center px-5">
              <button
                onClick={scrollToContactForm}
                className="bg-white text-navy hover:bg-gray-100 px-4 py-3 rounded-none text-sm font-bold border-2 border-navy"
              >
                Contact Us
              </button>
              <Link
                href="https://clearenergypartners.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-orange text-white hover:bg-orange-400 px-4 py-3 rounded-none text-sm font-bold border-2"
              >
                Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
