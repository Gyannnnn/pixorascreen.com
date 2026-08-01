import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateEmailHtml(name: string, email: string, subject: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);
  const replySubject = encodeURIComponent(`Re: ${subject}`);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message - PixoraScreen</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f5f7; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 32px; text-align: left; border-bottom: 3px solid #3b82f6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Pixora<span style="color: #60a5fa;">Screen</span></span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: rgba(59, 130, 246, 0.2); color: #93c5fd; border: 1px solid rgba(147, 197, 253, 0.3); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Contact Submission
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 20px 0; font-size: 20px; font-weight: 600; color: #0f172a; letter-spacing: -0.3px;">
                New Message Received
              </h1>
              
              <!-- Sender Details Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #edf2f7; font-size: 13px; color: #64748b; font-weight: 600; width: 80px;">From:</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #0f172a; font-weight: 500;">
                    ${safeName} &lt;<a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a>&gt;
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 600;">Subject:</td>
                  <td style="padding: 12px 16px; font-size: 14px; color: #0f172a; font-weight: 600;">
                    ${safeSubject}
                  </td>
                </tr>
              </table>

              <!-- Message Body -->
              <div style="margin-bottom: 28px;">
                <div style="font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Message Content:</div>
                <div style="background-color: #ffffff; border-left: 4px solid #3b82f6; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-top-right-radius: 8px; border-bottom-right-radius: 8px; padding: 20px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safeMessage}</div>
              </div>

              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-top: 8px; padding-bottom: 12px;">
                    <a href="mailto:${safeEmail}?subject=${replySubject}" style="display: inline-block; background-color: #0f172a; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 12px 28px; border-radius: 24px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                      Reply to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                Sent via PixoraScreen Contact Form &bull; <a href="https://pixorascreen.com" style="color: #64748b; text-decoration: underline;">pixorascreen.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export const POST: APIRoute = async (context) => {
  try {
    const request = context.request;
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields (Name, Email, Subject, Message) are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    const toEmail = import.meta.env.CONTACT_TO_EMAIL || process.env.CONTACT_TO_EMAIL || 'hi.gyanaranjanpatra@gmail.com';
    let fromEmail = import.meta.env.RESEND_FROM || process.env.RESEND_FROM || 'hello@pixorascreen.com';

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error: RESEND_API_KEY is not configured.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);
    const formattedFrom = fromEmail.includes('<') ? fromEmail : `PixoraScreen Contact <${fromEmail}>`;
    const emailHtml = generateEmailHtml(name, email, subject, message);

    let sendResult = await resend.emails.send({
      from: formattedFrom,
      to: [toEmail],
      replyTo: email,
      subject: `[PixoraScreen] ${subject}`,
      html: emailHtml,
    });

    // Fallback if domain error occurs unexpectedly
    if (sendResult.error && sendResult.error.message?.includes('domain')) {
      console.warn('Primary verified domain failed. Retrying with fallback onboarding sender...');
      sendResult = await resend.emails.send({
        from: 'PixoraScreen Contact <onboarding@resend.dev>',
        to: [toEmail],
        replyTo: email,
        subject: `[PixoraScreen] ${subject}`,
        html: emailHtml,
      });
    }

    if (sendResult.error) {
      console.error('Resend API Error:', sendResult.error);
      return new Response(
        JSON.stringify({ error: sendResult.error.message || 'Failed to send message.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: sendResult.data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('Error handling contact form request:', err);
    return new Response(
      JSON.stringify({ error: err.message || 'An unexpected server error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
