import * as React from "react";

interface EmailTemplateProps {
  name: string;
  company: string;
  options: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  company,
  options,
  emailAddress,
  phoneNumber,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>Name: {name}</p>
    <p>Company: {company}</p>
    <p>Options: {options}</p>
    <p>Email Address: {emailAddress}</p>
    <p>Phone Number: {phoneNumber}</p>
    <p>Message: {message}</p>
  </div>
);
