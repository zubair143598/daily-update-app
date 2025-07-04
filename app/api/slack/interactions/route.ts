import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const formData = await req.formData();
 const rawPayload = formData.get("payload");
if (typeof rawPayload !== "string") {
  return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
}

let payload;
try {
  payload = JSON.parse(rawPayload);
} catch {
  return NextResponse.json({ error: "Malformed JSON payload" }, { status: 400 });
}

  const user = payload.user;
  const userId = user.id;
  const userName = user.username;

  await axios.post(payload.response_url, {
    replace_original: false,
    text: `Hi <@${userId}>! Click below to submit your update.`,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Click below to fill out your update:`,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Go to Form",
            },
            url: `https://f6d0-2407-d000-8-b4e9-b8a0-f8e4-9d7b-66d9.ngrok-free.app/daily-updates?userId=${userId}&name=${encodeURIComponent(userName)}`,
          },
        ],
      },
    ],
  });

  return NextResponse.json({ ok: true });
}
