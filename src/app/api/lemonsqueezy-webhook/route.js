import crypto from "crypto";
import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req) {
  try {
    const body = await req.text();

    const signature = req.headers.get("x-signature");

    const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

    const hmac = crypto.createHmac("sha256", secret).update(body).digest("hex");

    if (hmac !== signature) {
      return new Response("Invalid signature", {
        status: 403,
      });
    }

    const payload = JSON.parse(body);

    const eventName = payload.meta.event_name;

    if (eventName === "order_created") {
      const attributes = payload.data.attributes;

      const customerEmail = attributes.user_email;

      /*
        CUSTOM DATA
        You can also retrieve:
        payload.meta.custom_data
      */

      const meta = payload.meta.custom_data;

      const websiteUrl = meta.website_url;
      const businessName = meta.business_name;
      const selectedPlan = meta.selected_plan;

      // EMAIL TO YOU
      await resend.emails.send({
        from: "AuditPro <onboarding@resend.dev>",
        to: process.env.AUDIT_RECEIVER_EMAIL,

        subject: `New Website Audit Order (${selectedPlan})`,

        html: `
          <h2>New Audit Order</h2>

          <p><strong>Plan:</strong> ${selectedPlan}</p>

          <p><strong>Website:</strong> ${websiteUrl}</p>

          <p><strong>Email:</strong> ${customerEmail}</p>

          <p><strong>Business:</strong> ${businessName}</p>
        `,
      });

      // EMAIL TO CUSTOMER
      await resend.emails.send({
        from: "AuditPro <onboarding@resend.dev>",
        to: customerEmail,

        subject: "Your Website Audit Order Received",

        html: `
          <h2>Thank You!</h2>

          <p>We received your audit request.</p>

          <p>Your report will be delivered within 24–48 hours.</p>

          <p><strong>Selected Plan:</strong> ${selectedPlan}</p>

          <p><strong>Website:</strong> ${websiteUrl}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
