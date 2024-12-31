"use server";

import { contactInfo } from "@/components/Contact/Form";
import envConfig from "@/config/envConfig";
import nodemailer from "nodemailer";

export const sendEmail = async (contactInfo: contactInfo) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: envConfig.GMAIL_USER,
      pass: envConfig.GMAIL_PASS,
    },
  });

  const html = `<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <div style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #333333;">Contact Form Submission</div>
  <div style="margin-bottom: 20px; line-height: 1.6;">
    <p><strong>Name:</strong> ${contactInfo.name}</p>
    <p><strong>Phone:</strong> ${contactInfo.phone}</p>
    <p><strong>Email:</strong> ${contactInfo.email}</p>
    <p><strong>Subject:</strong> ${contactInfo.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${contactInfo.message}</p>
  </div>
  <div style="font-size: 12px; color: #777777; text-align: center; border-top: 1px solid #eeeeee; padding-top: 10px;">
    <p>This email was sent from the contact form on your website.</p>
  </div>
</div>
  `;

  await transporter.sendMail({
    from: `${contactInfo.name} <${contactInfo.email}>`, // sender address
    to: "shakibalfurqan@gmail.com", // list of receivers
    subject: contactInfo.subject, // Subject line
    html, // html body
  });
};
