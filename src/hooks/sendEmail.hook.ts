/* eslint-disable @typescript-eslint/no-explicit-any */
import { contactInfo } from "@/components/Contact/Form";
import { sendEmail } from "@/services/MailSenderService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSendEmail = () => {
  return useMutation<any, Error, contactInfo>({
    mutationKey: ["SEND_EMAIL"],
    mutationFn: async (contactData) => await sendEmail(contactData),
    onSuccess: () => {
      toast.success("Email sent successfully");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
};
