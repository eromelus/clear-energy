"use server"

import { z } from "zod"
import { formSchema } from "./schemas"
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not configured in environment variables');
    }

    if (!process.env.RESEND_FROM_EMAIL) {
        throw new Error('RESEND_FROM_EMAIL is not configured in environment variables');
    }

    try {
        const result = await resend.emails.send({
            from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
            to: ['eromelus@clearenergypartners.com'],
            subject: 'New Contact Form Submission',
            react: EmailTemplate({ 
                name: emailFormData.name, 
                company: emailFormData.company, 
                options: emailFormData.options, 
                emailAddress: emailFormData.emailAddress, 
                phoneNumber: emailFormData.phoneNumber,
                preferredContactMethod: emailFormData.preferredContactMethod,
                message: emailFormData.message 
            }),
        });

        if (!result || !result.id) {
            throw new Error('Failed to send email');
        }

        return { success: true, id: result.id };
    } catch (error) {
        console.error('Email sending error:', error);
        throw new Error(error instanceof Error ? error.message : 'Failed to send email');
    }
}