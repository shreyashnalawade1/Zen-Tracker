import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { createResource } from "../services/resources";

export default function useCreateResource() {
  const { groupId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: createResourceFn, isLoading } = useMutation({
    mutationFn: (data) =>
      createResource({
        ...data,
        //todo
        createdBy: "6582ce83ff8a132d8c88a886",
        group: groupId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      console.log("Successfull");
    },
  });

  return { createResourceFn, isLoading };
}
