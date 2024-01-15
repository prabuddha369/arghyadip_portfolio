import { EmailTemplate } from '../../components/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, contact, age } = body;

        console.log(body);
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['arghyadipbiswas.consultant@gmail.com'],
            subject: name+' wants to contact',
            react: EmailTemplate(body),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
