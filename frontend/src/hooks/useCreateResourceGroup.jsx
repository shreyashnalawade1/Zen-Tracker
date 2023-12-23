import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createResourceGroup } from "../services/resourceGroup";
import { useParams } from "react-router";

export default function useCreateResourceGroup() {
  const { projectId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: createResourceG, isLoading } = useMutation({
    mutationFn: (resourceGroupName) =>
      createResourceGroup({
        resourceGroupName,
        project: projectId,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      console.log("Successfull");
    },
  });

  return { createResourceG, isLoading };
}
