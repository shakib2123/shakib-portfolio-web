"use client";

import { montserrat } from "@/fonts";
import { useSendEmail } from "@/hooks/sendEmail.hook";
import contactValidationSchema from "@/schema/contactValidation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type contactInfo = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactInfo>({
    resolver: zodResolver(contactValidationSchema),
  });

  const { mutate: sendEmail, isPending, isSuccess } = useSendEmail();

  const onSubmit: SubmitHandler<contactInfo> = (data) => {
    sendEmail(data);
  };

  useEffect(() => {
    if (isSuccess) reset();
  }, [isSuccess, reset]);

  return (
    <section className="px-6 py-8 rounded-lg shadow-custom-shadow-1 basis-2/3">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="container flex flex-col gap-2 relative">
            <label
              htmlFor="name"
              className={`${montserrat.className} mb-2 text-[12px] uppercase text-gray-400 tracking-[1px]`}
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="h-14 w-full bg-[#191b1e] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset] outline-none border-2 border-[#191b1e] focus:border-primary rounded-lg transition-all duration-300 px-3"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name?.message &&
                  typeof errors.name.message === "string" && (
                    <span>{errors.name.message}</span>
                  )}
              </span>
            )}
          </div>
          <div className="container flex flex-col gap-2 relative">
            <label
              htmlFor="phone"
              className={`${montserrat.className} mb-2 text-[12px] uppercase text-gray-400 tracking-[1px]`}
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              className="h-14 w-full bg-[#191b1e] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset] outline-none border-2 border-[#191b1e] focus:border-primary rounded-lg transition-all duration-300 px-3"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm mt-1">
                {errors.phone?.message &&
                  typeof errors.phone.message === "string" && (
                    <span>{errors.phone.message}</span>
                  )}
              </span>
            )}
          </div>
        </div>

        <div className="container flex flex-col gap-2 relative">
          <label
            htmlFor="email"
            className={`${montserrat.className} mb-2 text-[12px] uppercase text-gray-400 tracking-[1px]`}
          >
            Your Email
          </label>
          <input
            id="email"
            type="text"
            className="h-14 w-full bg-[#191b1e] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset] outline-none border-2 border-[#191b1e] focus:border-primary rounded-lg transition-all duration-300 px-3"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              {errors.email?.message &&
                typeof errors.email.message === "string" && (
                  <span>{errors.email.message}</span>
                )}
            </span>
          )}
        </div>
        <div className="container flex flex-col gap-2 relative">
          <label
            htmlFor="subject"
            className={`${montserrat.className} mb-2 text-[12px] uppercase text-gray-400 tracking-[1px]`}
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="h-14 w-full bg-[#191b1e] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset] outline-none border-2 border-[#191b1e] focus:border-primary rounded-lg transition-all duration-300 px-3"
            {...register("subject")}
          />
          {errors.subject && (
            <span className="text-red-500 text-sm mt-1">
              {errors.subject?.message &&
                typeof errors.subject.message === "string" && (
                  <span>{errors.subject.message}</span>
                )}
            </span>
          )}
        </div>

        <div className="container flex flex-col gap-2 relative">
          <label
            htmlFor="message"
            className={`${montserrat.className} mb-2 text-[12px] uppercase text-gray-400 tracking-[1px]`}
          >
            Message
          </label>
          <textarea
            id="message"
            className="h-40 w-full bg-[#191b1e] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset] outline-none border-2 border-[#191b1e] focus:border-primary rounded-lg transition-colors duration-300 px-3"
            {...register("message")}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">
              {errors.message?.message &&
                typeof errors.message.message === "string" && (
                  <span>{errors.message.message}</span>
                )}
            </span>
          )}
        </div>
        <Button
          type="submit"
          className="bg-[#212428] p-7 transition-all hover:bg-black/30 shadow-custom-shadow-1 hover:-translate-y-1 duration-300 text-secondary w-full"
        >
          {isPending && !isSuccess ? (
            <Spinner size="sm" color="white" />
          ) : (
            "SEND MESSAGE"
          )}
        </Button>
      </form>
    </section>
  );
}
