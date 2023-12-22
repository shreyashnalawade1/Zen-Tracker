import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { sendMessageApi } from "../services/messages";

export default function useSendMessage() {
  //   const queryClient = useQueryClient();
  const [chatId] = useSearchParams();
  const id = chatId.get("chatId");
  const { mutate: sendMessageFn, isLoading } = useMutation({
    mutationFn: (content) => sendMessageApi({ chat: id, content }),
    onSuccess: () => {
      console.log("Successfull");
    },
  });

  return { sendMessageFn, isLoading };
}
