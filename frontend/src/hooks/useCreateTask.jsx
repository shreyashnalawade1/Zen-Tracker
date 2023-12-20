import { useMutation } from "@tanstack/react-query";
import { createTaskApi } from "../services/tasks";

export default function useCreateTask() {
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: createTaskApi,
    onSuccess: () => {
      console.log("Successfull");
    },
  });

  return { createTask, isLoading };
}
