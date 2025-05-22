"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { useState } from "react";
import { toast } from "react-hot-toast";

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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { forwardRef, useImperativeHandle, useRef } from "react";

export const ContactForm = forwardRef((props, ref) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      if (formRef.current) {
        const yOffset = -100; // Adjust this value to fine-tune the scroll position
        const y =
          formRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        setTimeout(() => nameInputRef.current?.focus(), 1000); // Delay focus to ensure scroll is complete
      }
    },
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      options: undefined,
      emailAddress: "",
      phoneNumber: "",
      message: "",
      preferredContactMethod: undefined, // Add this line
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await send(values);
      console.log("Form submitted successfully:", values);
      toast.success(
        "Thank you for contacting us 👍\n\nWe have received your inquiry and will be in touch shortly!",
        {
          duration: 5000,
          style: {
            whiteSpace: "pre-line",
          },
        }
      );
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-navy text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100 font-libre-baskerville">
              Let&#39;s Partner For a Greener Future
            </h2>
            <p className="mb-6 text-gray-400">
              Are you interested in joining our mission to help ensure the
              responsible management of solar projects?
            </p>
            <p className="mb-6 text-gray-400">
              Clean Energy Partner is actively seeking partnerships with
              organizations to committed to sustainable practices and
              responsible solar project decommissioning.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-50">
                You can also reach us:
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">General Inquiries:</span>{" "}
                  <a
                    href="mailto:info@cleanenergypartners.com"
                    className="text-blue-300 hover:text-blue-200"
                  >
                    info@cleanenergypartners.com
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
                ref={formRef}
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
                          className="w-full px-3 py-2 border-0 text-gray-700 text-sm placeholder-gray-400 focus:bg-white focus:outline-none bg-white rounded-none"
                          {...field}
                          ref={(e) => {
                            field.ref(e);
                            nameInputRef.current = e;
                          }}
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
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        How Can We Help?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-2 bg-darkBlue border-0 text-gray-400 text-sm rounded-none focus:bg-white">
                            <SelectValue placeholder="Select a service" />
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 text-gray-700 text-sm placeholder-gray-400 focus:bg-white rounded-none"
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 text-gray-700 text-sm placeholder-gray-400 focus:bg-white rounded-none"
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-none text-gray-700 text-sm focus:bg-white placeholder-gray-400"
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
                  name="preferredContactMethod"
                  render={({ field, fieldState }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="block text-sm font-medium mb-1 text-blue">
                        Preferred Contact Method
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Email" />
                            </FormControl>
                            <FormLabel className="font-normal">Email</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <RadioGroupItem value="Phone" />
                            </FormControl>
                            <FormLabel className="font-normal">Phone</FormLabel>
                          </FormItem>
                        </RadioGroup>
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
                          className="w-full px-3 py-2 bg-darkBlue border-0 rounded-none text-gray-700 text-sm placeholder-gray-400 focus:bg-white focus:outline-none"
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
                  className="w-full flex justify-between items-center px-6 py-4 border border-transparent text-base font-bold rounded-none text-white bg-orange hover:bg-orange-400"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";
