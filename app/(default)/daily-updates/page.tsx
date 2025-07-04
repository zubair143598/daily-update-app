"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDailyUpdateSchema, DailyUpdate } from "@/types/dailyUpdatesSchema";
import { useSubmitUpdate } from "@/hooks/useSubmitUpdate";
import { useEffect } from "react";

const DailyUpdates = () => {
 const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<DailyUpdate>({
    resolver:  zodResolver(getDailyUpdateSchema()),
  });

  const { mutate, isPending, isSuccess, error } = useSubmitUpdate();

  // ✅ Grab userId and name from Slack link
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId") || "";
    const name = params.get("name") || "";
    setValue("userId", userId);
    setValue("name", name);
  }, [setValue]);

  const onSubmit = (data: DailyUpdate) => {
    mutate(data, {
      onSuccess: () => {
        reset(); // ✅ Clear form after success
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] md:mx-auto px-4 sm:px-6 py-12 md:py-20 text-white w-full">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto  my-12 flex flex-col w-full max-w-[700px]"
    >
      <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.forest.200),theme(colors.gray.50),theme(colors.forest.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-menda font-medium text-transparent text-[22px] lg:text-[30px] md:block hidden">
        Submit Your Daily Update
      </h2>

      {/* Hidden fields for Slack user info */}
      <input type="hidden" {...register("userId")} />
      <input type="hidden" {...register("name")} />

      {/* Update Textarea */}
    
<div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Accomplish tasks since last update</label>
        <textarea
          {...register("accomplish")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full focus:ring-[rgb(0,162,112)] mt-[15px] bg-transparent text-white border-x-0 min-h-[100px]"
          placeholder="All tasks implemented since the last update"
        />
        {errors.accomplish && (
          <p className="text-red-500 text-sm">{errors.accomplish.message}</p>
        )}
      </div>  
      
      <div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Blockers</label>
        <textarea
          {...register("blockers")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full focus:ring-[rgb(0,162,112)] mt-[15px] bg-transparent text-white border-x-0 min-h-[100px]"
          placeholder="Blockers/ Backlog"
        />
        {errors.blockers && (
          <p className="text-red-500 text-sm">{errors.blockers.message}</p>
        )}
      </div>

      <div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Scheduled tasks</label>
        <textarea
          {...register("todayTask")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full focus:ring-[rgb(0,162,112)] mt-[15px] bg-transparent text-white border-x-0 min-h-[100px]"
          placeholder="Scheduled tasks"
        />
        {errors.todayTask && (
          <p className="text-red-500 text-sm">{errors.todayTask.message}</p>
        )}
      </div>

      <div className="mb-[31px]">
        <label className="text-[#BABABA] mb-2">Handoffs</label>
        <textarea
          {...register("handoffs")}
          style={{
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderImageSource:
              "linear-gradient(95.8deg, rgba(0, 28, 19, 1) 0%, rgb(0, 162, 112) 50%, rgba(0, 28, 19, 0.3) 111.5%)",
            borderImageSlice: 1,
          }}
          className="w-full focus:ring-[rgb(0,162,112)] mt-[15px] bg-transparent text-white border-x-0 min-h-[100px]"
          placeholder="Scheduled tasks"
        />
        {errors.handoffs && (
          <p className="text-red-500 text-sm">{errors.handoffs.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={isPending}
        type="submit"
        className="btn  group mb-4 w-full bg-forest-600 hover:bg-forest-800 hover:transition-all hover:duration-150 text-white rounded-full px-12 py-3 text-[16px]"
      >
        <span className="relative inline-flex items-center">
          {" "}
          {isPending ? "Submitting..." : "Submit Update"}
        </span>
      </button>

      {/* Success & Error Messages */}
      {isSuccess && (
        <p className="text-green-600">Update submitted successfully!</p>
      )}
      {error && (
        <p className="text-red-500">Submission failed. Please try again.</p>
      )}
    </form>
    </div>
  );
}

export default DailyUpdates;
