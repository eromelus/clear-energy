"use server"

import { z } from "zod"
import { formSchema } from "./schemas"
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    try {
        // TODO: Add email to database  
        
        const {error } = await resend.emails.send({
            from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
            to: ['eromelus@clearenergypartners.com'],
            subject: 'Hello world',
            react: EmailTemplate({ name: emailFormData.name }),
          });
    
    } catch (error) {
        throw error
    }
}