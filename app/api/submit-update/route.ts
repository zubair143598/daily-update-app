import Update from "@/lib/models/Update";
import { connectDB } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const { userId, name, accomplish, blockers, todayTask, handoffs } = body;
  console.log(123, name);

  await Update.create({
    userId,
    name,
    accomplish,
    blockers,
    todayTask,
    handoffs,
  });

  // Format multiline fields with bullet points
  const formatBulletList = (text: string) =>
    text
      .split("\n")
      .map((line) => `• ${line}`)
      .join("\n");

  // Construct Slack message conditionally
  let slackText = `*${name}* has submitted their daily update:\n`;
  {
    if (accomplish) {
      const formattedAccomplish = formatBulletList(accomplish);
      slackText += `*All task implemented*:\n${formattedAccomplish}\n`;
    }
  }
  const formattedBlockers = formatBulletList(blockers);
  slackText += `*Blockers/ Backlog*:\n${formattedBlockers}\n`;

  const formattedTodayTask = formatBulletList(todayTask);
  slackText += `*Scheduled Task*:\n${formattedTodayTask}\n`;

  if (handoffs) {
    const formattedHandoffs = formatBulletList(handoffs);
    slackText += `*handoffs*:\n${formattedHandoffs}`;
  }

  // Send message to Slack
  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: "C08SE5Q8XUG",
      text: slackText,
    }),
  });

  return NextResponse.json({ success: true });
}
