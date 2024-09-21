"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";

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
    send(values);
    console.log("Form submitted successfully:", values);
  };

  return (
    <section className="bg-navy text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
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

          <div className="lg:w-1/2 lg:pl-8">
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-md text-gray-700 text-sm placeholder-gray-400 focus:bg-white focus:outline-none bg-white"
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-gray-700 text-sm placeholder-gray-400 focus:bg-white"
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-gray-700 text-sm placeholder-gray-400 focus:bg-white"
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-gray-700 text-sm focus:bg-white placeholder-gray-400"
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-sm text-gray-700 text-sm placeholder-gray-400 focus:bg-white focus:outline-none"
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
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
