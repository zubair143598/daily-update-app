import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = JSON.parse(formData.get("payload") as string);

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
            url: `https://daily-update-app-eight.vercel.app/daily-updates?userId=${userId}&name=${encodeURIComponent(userName)}`,
          },
        ],
      },
    ],
  });

  return NextResponse.json({ ok: true });
}
