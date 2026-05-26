import { NextResponse } from "next/server";
import { createCheckout } from "@/lib/lemonsqueezy";

export async function POST(req) {
  try {
    const body = await req.json();

    const { plan, url, email, business } = body;

    if (!url || !email || !plan) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const variantId =
      plan === "basic"
        ? process.env.LEMON_SQUEEZY_BASIC_VARIANT_ID
        : process.env.LEMON_SQUEEZY_DETAILED_VARIANT_ID;

    const checkout = await createCheckout({
      variantId,
      email,
      url,
      business,
      plan,
    });

    return NextResponse.json({
      checkoutUrl: checkout.data.attributes.url,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}