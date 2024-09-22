"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-white mt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:flex md:flex-shrink-0 lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-xs font-bold"
              >
                Decommissioning
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-xs font-bold"
              >
                Recycling
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-xs font-bold"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-xs font-bold"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="#"
                className="bg-white text-gray-600 hover:bg-gray-100 px-4 py-3 text-sm font-bold border-2 border-navy"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="ml-3 bg-orange-500 text-white hover:bg-orange-600 px-4 py-3 text-sm font-bold border-2 border-orange-500"
              >
                Store
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Decommissioning
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Recycling
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              All Services
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 md:hidden">
            <div className="flex items-center px-5">
              <Link
                href="#"
                className="bg-white text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium border border-gray-300"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="ml-3 bg-orange-500 text-white hover:bg-orange-600 px-3 py-2 rounded-md text-sm font-medium"
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
