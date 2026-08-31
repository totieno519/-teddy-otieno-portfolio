import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      budget,
      message,
    } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !projectType ||
      !budget ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Send project inquiry email
    const { data, error } = await resend.emails.send({
      from: "Teddy Otieno Portfolio <onboarding@resend.dev>",
      to: ["totieno519@gmail.com"],
      replyTo: email,
      subject: `New Project Inquiry — ${projectType}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background:#f5f5f5; padding:40px 20px;">
          <div style="max-width:700px; margin:0 auto; background:#ffffff; border-radius:18px; overflow:hidden; border:1px solid #e5e5e5;">

            <div style="background:#ffd400; padding:28px 32px;">
              <h1 style="margin:0; font-size:26px; color:#000000;">
                New Project Inquiry
              </h1>

              <p style="margin:8px 0 0; color:#333333; font-size:14px;">
                Teddy Otieno Portfolio
              </p>
            </div>

            <div style="padding:32px;">

              <h2 style="margin:0 0 24px; color:#111111; font-size:21px;">
                Client Details
              </h2>

              <table style="width:100%; border-collapse:collapse; font-size:15px;">
                <tr>
                  <td style="padding:10px 0; font-weight:bold; color:#555555; width:180px;">
                    Name
                  </td>
                  <td style="padding:10px 0; color:#111111;">
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-weight:bold; color:#555555;">
                    Email
                  </td>
                  <td style="padding:10px 0; color:#111111;">
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-weight:bold; color:#555555;">
                    Company / Organization
                  </td>
                  <td style="padding:10px 0; color:#111111;">
                    ${escapeHtml(company || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-weight:bold; color:#555555;">
                    Project Type
                  </td>
                  <td style="padding:10px 0; color:#111111;">
                    ${escapeHtml(projectType)}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-weight:bold; color:#555555;">
                    Estimated Budget
                  </td>
                  <td style="padding:10px 0; color:#111111;">
                    ${escapeHtml(budget)}
                  </td>
                </tr>
              </table>

              <div style="margin-top:30px; padding-top:24px; border-top:1px solid #eeeeee;">
                <h2 style="margin:0 0 14px; color:#111111; font-size:21px;">
                  Project Description
                </h2>

                <p style="margin:0; color:#444444; font-size:15px; line-height:1.8; white-space:pre-wrap;">
                  ${escapeHtml(message)}
                </p>
              </div>

              <div style="margin-top:32px;">
                <a
                  href="mailto:${escapeHtml(email)}"
                  style="display:inline-block; background:#ffd400; color:#000000; text-decoration:none; padding:13px 22px; border-radius:999px; font-weight:bold; font-size:14px;"
                >
                  Reply to Client
                </a>
              </div>

            </div>

            <div style="padding:20px 32px; background:#fafafa; border-top:1px solid #eeeeee;">
              <p style="margin:0; color:#888888; font-size:12px;">
                This inquiry was submitted through the Teddy Otieno portfolio website.
              </p>
            </div>

          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your inquiry right now. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your project inquiry has been sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

/**
 * Escape user-provided text before placing it inside the email HTML.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}