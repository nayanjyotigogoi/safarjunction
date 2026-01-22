import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

// ---- Simple in-memory rate limit (MVP safe) ----
const rateLimit = new Map<string, number>()
const RATE_LIMIT_TIME = 60_000 // 1 minute

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      destination,
      journeyDuration,
      travelers,
      message,
      honeypot,
    } = body

    // 🛑 Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true })
    }

    // 🛑 Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"

    const lastRequest = rateLimit.get(ip)
    if (lastRequest && Date.now() - lastRequest < RATE_LIMIT_TIME) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429 }
      )
    }

    rateLimit.set(ip, Date.now())

    // ---- SMTP Transport (Hostinger) ----
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "connect@safarjunction.com",
        pass: process.env.EMAIL_PASSWORD!,
      },
    })

    // ---- Admin Email ----
    const adminHtml = `
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f8f8f8;padding:24px;">
  <div style="max-width:600px;background:#ffffff;border-radius:12px;padding:24px;">
    <h2>New Journey Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "—"}</p>

    <hr style="margin:20px 0;" />

    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Duration:</strong> ${journeyDuration}</p>
    <p><strong>Travelers:</strong> ${travelers}</p>

    <hr style="margin:20px 0;" />

    <p><strong>Message:</strong></p>
    <p style="white-space:pre-line;">${message || "—"}</p>
  </div>
</body>
</html>
`

    // ---- User Auto Reply (LEFT LOGO + RIGHT BRAND) ----
    const userHtml = `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f8f8f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border-radius:16px;padding:32px;">

          <!-- HEADER -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- LOGO -->
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

          <!-- MESSAGE -->
          <tr>
            <td style="font-size:16px;line-height:1.6;color:#222;">
              Hi ${name},
              <br /><br />
              Thank you for reaching out to <strong>SafarJunction</strong>.
              <br /><br />
              We’ve received your travel inquiry and one of our experts will
              contact you within <strong>24 hours</strong>.
            </td>
          </tr>

          <!-- REQUEST SUMMARY -->
          <tr>
            <td style="padding:24px 0;">
              <div style="background:#f5f5f5;border-radius:12px;padding:16px;font-size:14px;">
                <strong>Your request:</strong><br /><br />
                Destination: ${destination}<br />
                Duration: ${journeyDuration}<br />
                Travelers: ${travelers}
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="font-size:14px;line-height:1.6;color:#555;">
              If your travel dates are urgent, feel free to reply directly
              to this email.
              <br /><br />
              Warm regards,<br />
              <strong>Team SafarJunction</strong><br />
              <span style="color:#888;">Curated journeys across Northeast India</span>
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
`

    // ---- Send Admin Email ----
    await transporter.sendMail({
      from: `"SafarJunction Website" <connect@safarjunction.com>`,
      to: "connect@safarjunction.com",
      replyTo: email,
      subject: "New Journey Inquiry",
      html: adminHtml,
    })

    // ---- Send User Auto Reply ----
    await transporter.sendMail({
      from: `"SafarJunction" <connect@safarjunction.com>`,
      to: email,
      subject: "We’ve received your journey inquiry ✨",
      html: userHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SMTP ERROR:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send inquiry" },
      { status: 500 }
    )
  }
}
