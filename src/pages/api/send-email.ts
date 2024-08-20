import { Resend } from "resend";
import { EmailTemplate } from "../../emails/EmailTemplate";

import { RESEND_API_KEY } from "astro:env/server";

import type { APIRoute } from "astro";

const resend = new Resend(RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const { name, lastname, email, phoneNumber, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "santiagofederici88@gmail.com",
      subject: "Nuevo usuario",
      react: EmailTemplate({ name, lastname, email, phoneNumber, message }),
    });

    return new Response(
      JSON.stringify({
        message: "success",
      }),
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "error",
      }),
    );
  }
};
