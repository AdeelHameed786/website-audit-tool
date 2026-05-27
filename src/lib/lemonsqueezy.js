const headers = {
  Accept: "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
  Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
};

export async function createCheckout({
  variantId,
  email,
  url,
  business,
  plan,
}) {
  const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            email,

            custom: {
              website_url: url,
              business_name: business,
              selected_plan: plan,
            },
          },

          checkout_options: {
            embed: false,
            media: true,
            logo: true,
          },

          product_options: {
            redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
          },
        },

        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID,
            },
          },

          variant: {
            data: {
              type: "variants",
              id: variantId,
            },
          },
        },
      },
    }),
  });

  return response.json();
}
