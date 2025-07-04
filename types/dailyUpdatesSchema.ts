import { z } from "zod"

export const getDailyUpdateSchema = () =>
  z.object({
    name: z.string().min(1, "Name is required"),
    userId: z.string().min(1, "User ID is required"),
    accomplish: z.string().optional(), // ✅ optional if not Monday
  blockers: z.string().min(1, "blockers are important"),
  todayTask:  z.string().min(1, "Please write Scheduled tasks for the day"),
  handoffs: z.string().optional(),
})

export type DailyUpdate = z.infer<ReturnType<typeof getDailyUpdateSchema>>;