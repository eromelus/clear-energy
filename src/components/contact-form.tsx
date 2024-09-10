"use client";

import { ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <section className="bg-navy-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 md:pt-16 md:pr-24 md:pb-20 md:pl-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-400">
              Let's Partner For a Greener Future
            </h2>
            <p className="mb-6 text-gray-200">
              Are you interested in joining our mission to bring clean energy to
              your community?
            </p>
            <p className="mb-6 text-gray-800">
              Clean Energy Partner is actively seeking partnerships with
              landowners and community organizations to develop solar projects
              that benefit local residents.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-50">
                You can also reach us:
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">General Inquiries:</span>{" "}
                  <a
                    href="mailto:info@cleanenergypartner.com"
                    className="text-blue-300 hover:text-blue-200"
                  >
                    info@cleanenergypartner.com
                  </a>
                </li>
                <li>
                  <span className="font-semibold">Careers:</span>{" "}
                  <a
                    href="mailto:careers@cleanenergypartner.com"
                    className="text-blue-300 hover:text-blue-200"
                  >
                    careers@cleanenergypartner.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Write your name"
                />
              </div>
              <div>
                <label
                  htmlFor="option"
                  className="block text-sm font-medium mb-1 text-gray-200"
                >
                  Select Option
                </label>
                <select
                  id="option"
                  name="option"
                  className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-md text-white"
                >
                  <option>Solar Decomission</option>
                  <option>Recycling</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1 text-gray-200"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Input your company name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Input your working email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1 text-gray-200"
                >
                  Phone
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-navy-700 bg-navy-800 text-gray-400 sm:text-sm">
                    +01
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md bg-navy-800 border border-navy-700 text-white placeholder-gray-400"
                    placeholder="000 - 0000"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1 text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-navy-800 border border-navy-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
