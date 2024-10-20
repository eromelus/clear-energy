import * as React from "react";

interface EmailTemplateProps {
  name: string;
  company: string;
  options: string;
  emailAddress: string;
  phoneNumber: string;
  preferredContactMethod: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  company,
  options,
  emailAddress,
  phoneNumber,
  preferredContactMethod,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>Name: {name}</p>
    <p>Company: {company}</p>
    <p>Options: {options}</p>
    <p>Email Address: {emailAddress}</p>
    <p>Phone Number: {phoneNumber}</p>
    <p>Preferred Contact Method: {preferredContactMethod}</p>
    <p>Message: {message}</p>
  </div>
);
