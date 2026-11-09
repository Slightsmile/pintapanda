import { NextResponse } from "next/server";

type OrderPayload = {
  name: string;
  phone: string;
  address: string;
  notes?: string;
  productSlug: string;
  productTitle: string;
  quantity: number;
  price: number;
  total: number;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<OrderPayload>;

  if (
    !body.name ||
    !body.phone ||
    !body.address ||
    !body.productSlug ||
    !body.productTitle ||
    !body.quantity ||
    !body.price
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const webhookUrl = process.env.SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Order service is not configured" },
      { status: 500 }
    );
  }

  const order = {
    name: body.name,
    phone: body.phone,
    address: body.address,
    notes: body.notes ?? "",
    productSlug: body.productSlug,
    productTitle: body.productTitle,
    quantity: body.quantity,
    price: body.price,
    total: body.total ?? body.price * body.quantity,
    createdAt: new Date().toISOString(),
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to record order" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
