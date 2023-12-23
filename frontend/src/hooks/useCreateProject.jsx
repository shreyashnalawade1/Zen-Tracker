import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../services/projects";

export default function useCreate() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isLoading } = useMutation({
    mutationFn: (data) => createProjectApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });

      console.log("Successfull");
    },
  });

  return { createProject, isLoading };
}
