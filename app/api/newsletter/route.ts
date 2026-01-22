import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      pool: true,
      maxConnections: 1,
      auth: {
        user: "connect@safarjunction.com",
        pass: process.env.EMAIL_PASSWORD!,
      },
    })

    // ---- Admin Notification ----
    const adminMail = transporter.sendMail({
      from: `"SafarJunction Newsletter" <connect@safarjunction.com>`,
      to: "connect@safarjunction.com",
      subject: "New Newsletter Subscriber",
      html: `
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
    })

    // ---- User Auto Reply ----
    const userMail = transporter.sendMail({
      from: `"SafarJunction" <connect@safarjunction.com>`,
      to: email,
      subject: "Welcome to SafarJunction 🌿",
      html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f8f8f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;padding:32px;">
          <tr>
            <td style="font-size:24px;font-weight:700;">
              Welcome to SafarJunction 🌿
            </td>
          </tr>

          <tr>
            <td style="padding:16px 0;color:#444;font-size:16px;line-height:1.6;">
              Hi there,<br /><br />
              Thank you for subscribing to <strong>SafarJunction</strong>.
              <br /><br />
              You’ll now receive:
              <ul>
                <li>✨ Travel inspiration from Northeast India</li>
                <li>📍 Hidden destinations & local stories</li>
                <li>🎒 Exclusive journey ideas & offers</li>
              </ul>
              We promise — no spam, only meaningful travel.
            </td>
          </tr>

          <tr>
            <td style="padding-top:24px;color:#555;font-size:14px;">
              Warm regards,<br />
              <strong>Team SafarJunction</strong><br />
              <span style="color:#888;">Begin. Connect. Discover.</span>
            </td>
          </tr>
        </table>

        <div style="max-width:520px;text-align:center;font-size:12px;color:#999;margin-top:16px;">
          © ${new Date().getFullYear()} SafarJunction
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    })

    // Send both in parallel (fast)
    await Promise.all([adminMail, userMail])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("NEWSLETTER ERROR:", error)
    return NextResponse.json(
      { success: false, error: "Subscription failed" },
      { status: 500 }
    )
  }
}
