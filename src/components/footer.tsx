"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const footerSections = [
    {
      title: "Company",
      links: ["Decommissioning", "Recycling", "About Us"],
    },
    {
      title: "Legals",
      links: [
        {
          text: "Privacy Policy",
          url: "https://clearenergypartners.store/policies/privacy-policy",
        },
        {
          text: "Terms & Agreements",
          url: "https://clearenergypartners.store/pages/policies",
        },
      ],
    },
    {
      title: "Locations",
      links: [
        {
          text: "Fort Myers, FL",
          url: "https://maps.app.goo.gl/idL9uw3rj1EyJ9b1A",
        },
        {
          text: "Hurricane, UT",
          url: "https://maps.app.goo.gl/ZkDRyzENvVKCQqPh6",
        },
        {
          text: "Athens, TN",
          url: "https://maps.app.goo.gl/akehaLHYEsUcipaF9",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between lg:flex-row lg:items-start">
          <div className="mb-6 lg:mb-0">
            <Image
              src="/images/logo.png"
              alt="Clear Energy Partners Logo"
              width={160}
              height={40}
              style={{ width: "auto", height: "auto", maxHeight: "40px" }}
            />
            <p className="mt-2 text-sm text-navy">
              Powering a Greener Tomorrow
            </p>
            <p className="mt-2 text-sm text-navy">
              © 2024 Clear Energy Partners. All rights reserved.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {footerSections.map((section) => (
            <div
              key={section.title}
              className="border-t border-gray-200 pt-4 lg:border-t-0 lg:pt-0 text-navy"
            >
              <button
                className="flex w-full items-center justify-between text-left font-light lg:cursor-default"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <span className="lg:hidden">
                  {expandedSection === section.title ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              <ul
                className={`mt-2 space-y-2 ${
                  expandedSection === section.title ? "block" : "hidden"
                } lg:mt-4 lg:block`}
              >
                {section.links.map((link) => (
                  <li key={typeof link === "string" ? link : link.text}>
                    <a
                      href={typeof link === "string" ? "#" : link.url}
                      target={typeof link === "string" ? undefined : "_blank"}
                      rel={
                        typeof link === "string"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="text-sm text-navy font-semibold hover:text-gray-900"
                    >
                      {typeof link === "string" ? link : link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 mt-8">
        <p className="text-[12vw] leading-[0.9] text-gray-200 italic font-bold text-center px-0 py-4 md:text-[8vw] md:leading-none font-libre-baskerville">
          Clear Energy
          <br className="md:hidden" />
          {" Partners"}
        </p>
      </div>
    </footer>
  );
}
