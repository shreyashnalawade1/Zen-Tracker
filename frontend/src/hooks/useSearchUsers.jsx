import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getSearchUser } from "../services/users";

export default function useSearchUsers() {
  const queryClient = useQueryClient();
  const { mutate: searchUsers, isLoading } = useMutation({
    mutationFn: getSearchUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["searchUser"], data);
      queryClient.invalidateQueries("chats");
      console.log("Successfull");
    },
  });

  return { searchUsers, isLoading };
}
