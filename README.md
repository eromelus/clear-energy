# Clear Energy Partners Website

This is a [Next.js](https://nextjs.org) project for solar decommissioning and recycling solutions, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

This project uses Resend for email functionality. You need to set up the following environment variable:

```
RESEND_API_KEY=your_resend_api_key_here
```

Create a `.env.local` file in the root of your project and add the above line with your actual Resend API key.

## Project Structure

The project uses Next.js 14 with TypeScript and includes the following key features:

- Responsive layout
- Tailwind CSS for styling
- React Hook Form for form handling
- Shadcn/ui components for accessible UI elements
- Resend for email functionality

## Key Components

- Contact form (using React Hook Form and Resend for email submission)

## Dependencies

This project uses several key dependencies, including:

- Next.js 14.2.9
- React 18+
- Tailwind CSS
- Shadcn/ui components
- React Hook Form
- Zod for form validation
- Resend for email functionality

For a full list of dependencies, please refer to the `package.json` file.

## Styling

The project uses Tailwind CSS for styling. Custom styles can be added in the appropriate Tailwind configuration files.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying, make sure to set up the `RESEND_API_KEY` environment variable in your deployment environment.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
