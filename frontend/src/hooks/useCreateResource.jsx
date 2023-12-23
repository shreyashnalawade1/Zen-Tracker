import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { createResource } from "../services/resources";
import useUser from "./useUser";

export default function useCreateResource() {
  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const {user}=useUser();
  const { mutate: createResourceFn, isLoading } = useMutation({
    mutationFn: (data) =>
      createResource({
        ...data,
        //todo
        createdBy: user?.data?.user?._id,
        group: groupId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      console.log("Successfull");
    },
  });

  return { createResourceFn, isLoading };
}
