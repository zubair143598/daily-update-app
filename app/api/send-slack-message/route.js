import axios from "axios";
import { NextResponse } from "next/server";

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID;

export async function POST() {
  try {
    const response = await axios.post(
      "https://slack.com/api/chat.postMessage",
      {
        channel: SLACK_CHANNEL_ID,
        text: "🕘 Time to submit your daily update!",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Click the button below to submit your daily update 👇",
            },
          },
          {
            type: "actions",
            elements: [
              {
                type: "button",
                text: {
                  type: "plain_text",
                  text: "Submit Update",
                },
                action_id: "submit_daily_update",
                value: "submit_update", // optional
              },
            ],
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
     const responseData = response.data;
    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Slack API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}


export async function GET() {
  return NextResponse.json({ message: "Use POST method to trigger Slack message." });
}