import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // TODO: Integrate preferred email service here (e.g., SendGrid, Nodemailer with SMTP)
        // Example with nodemailer (requires installation and env vars):
        /*
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: 587,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
    
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: 'gokarnatemples@gmail.com',
          subject: `New Enquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        */

        console.log('Form submission received:', { name, email, message });

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
