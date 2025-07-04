import { useMutation } from "@tanstack/react-query";

export function useSubmitUpdate() {
  return useMutation({
    mutationFn: async (data: {
      name: string;
      userId: string;
      accomplish?: string;
      blockers:string;
      todayTask:string;
      handoffs?:string;
    }) => {
      const res = await fetch("/api/submit-update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      return res.json();
    },
  });
}
