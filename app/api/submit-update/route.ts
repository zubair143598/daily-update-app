import Update from "@/lib/models/Update";
// import { connectDB } from "../../../lib/db";
import { NextResponse } from "next/server";
import axios from "axios";
import { getDailyUpdateSchema } from "@/types/dailyUpdatesSchema";
import { withDB } from "@/lib/middleware/withDB";

const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID;
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;

export async function POST(req: Request) {
  return withDB(async () => {
    const body = await req.json();

    const schema = getDailyUpdateSchema();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { userId, name, accomplish, blockers, todayTask, handoffs } =
      parsed.data;

    await Update.create({
      userId,
      name,
      accomplish,
      blockers,
      todayTask,
      handoffs,
    });

    const formatBulletList = (text: string) =>
      text
        .split("\n")
        .map((line) => `• ${line}`)
        .join("\n");

    let slackText = `*${name}* has submitted their daily update:\n`;

    if (accomplish) {
      slackText += `*All task implemented*:\n${formatBulletList(accomplish)}\n`;
    }

    slackText += `*Blockers/ Backlog*:\n${formatBulletList(blockers)}\n`;
    slackText += `*Scheduled Task*:\n${formatBulletList(todayTask)}\n`;

    if (handoffs) {
      slackText += `*handoffs*:\n${formatBulletList(handoffs)}`;
    }

    await axios.post(
      "https://slack.com/api/chat.postMessage",
      {
        channel: SLACK_CHANNEL_ID,
        text: slackText,
      },
      {
        headers: {
          Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true });
  });
}