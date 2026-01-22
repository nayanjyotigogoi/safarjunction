import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

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

          <!-- HEADER: LEFT LOGO + RIGHT BRAND -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- LOGO BADGE -->
                  <td width="72" valign="middle">
                    <div
                      style="
                        background:#f5f5f5;
                        border-radius:12px;
                        padding:6px 8px;
                        display:inline-block;
                      "
                    >
                      <img
                        src="https://safarjunction.com/logo.png"
                        alt="SafarJunction"
                        width="34"
                        style="
                          display:block;
                          border:0;
                          outline:none;
                          text-decoration:none;
                          height:auto;
                        "
                      />
                    </div>
                  </td>

                  <!-- BRAND TEXT -->
                  <td valign="middle" style="padding-left:12px;">
                    <div style="font-size:18px;font-weight:700;color:#222;">
                      SafarJunction
                    </div>
                    <div style="font-size:13px;font-weight:500;color:#777;">
                      The junction of journey
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="padding:16px 0;">
              <div style="height:1px;background:#e5e5e5;"></div>
            </td>
          </tr>

          <!-- HEADING -->
          <tr>
            <td align="center" style="padding-bottom:12px;">
              <div style="font-size:24px;font-weight:700;color:#222;">
                Welcome to SafarJunction 🌿
              </div>
            </td>
          </tr>

          <!-- CONTENT -->
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

          <!-- FOOTER -->
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
