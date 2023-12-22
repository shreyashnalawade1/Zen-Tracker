import { useQuery } from "@tanstack/react-query";
import { getChats } from "../services/chats";

export default function useChats() {
  const {
    isLoading,
    data: chats,
    error,
  } = useQuery({
    queryKey: ["chats"],
    queryFn: getChats,
    retry: false,
  });
  return { isLoading, error, chats };
}
