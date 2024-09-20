"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "../components/ui/form";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string(),
  options: z.enum([
    "Solar Decommission",
    "Recycling Services",
    "OEM Replacements",
  ]),
  emailAddress: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      options: "Solar Decommission",
      emailAddress: "",
      company: "",
      phoneNumber: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted successfully:", values);
  };

  return (
    <section className="bg-navy text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 md:pt-16 md:pr-24 md:pb-20 md:pl-24">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100 font-libre-baskerville">
              Let's Partner For a Greener Future
            </h2>
            <p className="mb-6 text-gray-400">
              Are you interested in joining our mission to bring clean energy to
              your community?
            </p>
            <p className="mb-6 text-gray-400">
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Write your name"
                          type="text"
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-md text-white text-sm placeholder-gray-400"
                          {...field}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="options"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        How Can We Help?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm">
                            <SelectValue placeholder="How can we help?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Solar Decommission">
                            Solar Decommission
                          </SelectItem>
                          <SelectItem value="Recycling Services">
                            Recycling Services
                          </SelectItem>
                          <SelectItem value="OEM Replacements">
                            OEM Replacements
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        Company
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Input your company name"
                          type="text"
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
                          {...field}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emailAddress"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Input your working email"
                          type="email"
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
                          {...field}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="###-###-####"
                          type="tel"
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
                          {...field}
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          {...field}
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
                        />
                      </FormControl>
                      {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full flex justify-between items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                {/* <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-blue"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 bg-darkBlue border-0 rounded-md text-white text-sm placeholder-gray-400"
                    placeholder="Write your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="option"
                    className="block text-sm font-medium mb-1 text-blue"
                  >
                    Select Option
                  </label>
                  <select
                    id="option"
                    name="option"
                    className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm"
                  >
                    <option>Solar Decomission</option>
                    <option>Recycling</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1 text-blue"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
                    placeholder="Input your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-blue"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
                    placeholder="Input your working email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1 text-blue"
                  >
                    Phone
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-sm border-0 bg-darkBlue text-gray-400 sm:text-sm">
                      +01
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-sm bg-darkBlue border-0 text-white text-sm placeholder-gray-400"
                      placeholder="000 - 0000"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-blue"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-white text-sm placeholder-gray-400"
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
                </div> */}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
