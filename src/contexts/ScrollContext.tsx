"use client";

import React, { createContext, useContext, useRef, RefObject } from "react";

type ScrollContextType = {
  contactFormRef: RefObject<HTMLDivElement>;
  scrollToContactForm: () => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contactFormRef = useRef<HTMLDivElement>(null);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ contactFormRef, scrollToContactForm }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
