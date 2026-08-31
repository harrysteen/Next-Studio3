import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, company, services, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || process.env.SMTP_USER || 'dev@studiodezu.com';
    const emailPass = process.env.EMAIL_PASS || process.env.SMTP_PASS;
    const recipientEmail = process.env.EMAIL_TO || process.env.SMTP_TO || emailUser || 'dev@studiodezu.com';

    if (!emailPass) {
      console.error('EMAIL_PASS is missing from environment variables.');
      return NextResponse.json(
        { error: 'Server email credentials are not configured.' },
        { status: 500 }
      );
    }

    const cleanPass = emailPass.replace(/\s+/g, '');
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: cleanPass,
      },
    });

    const mailOptions = {
      from: `"${name} (via Studio Dezu)" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `✨ New Inquiry from ${name} - Studio Dezu`,
      text: `
New Contact Form Submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Services: ${services || 'None specified'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0b0c10; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto;">
          <h2 style="color: #ABFF4F; border-bottom: 2px solid #ABFF4F; padding-bottom: 10px; margin-top: 0;">New Project Inquiry</h2>
          <p style="font-size: 15px; color: #cfcfcf;">You received a new submission from the <strong>Studio Dezu</strong> contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; color: #ffffff;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: bold; width: 140px; color: #ABFF4F;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: bold; color: #ABFF4F;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;"><a href="mailto:${email}" style="color: #ABFF4F; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: bold; color: #ABFF4F;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: bold; color: #ABFF4F;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">${company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #222; font-weight: bold; color: #ABFF4F;">Services:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #222;">${services || 'None specified'}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 18px; background: #14161d; border-left: 4px solid #ABFF4F; border-radius: 6px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #ABFF4F; font-size: 14px;">Message:</p>
            <p style="margin: 0; line-height: 1.6; font-size: 14px; white-space: pre-wrap; color: #e0e0e0;">${message}</p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #777; text-align: center;">
            Studio Dezu Contact Form • Sent to ${recipientEmail}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
