import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { updateTaskApi } from "../services/tasks";

export default function useUpdateTask() {
  const { taskId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: updateTask, isLoading } = useMutation({
    mutationFn: (data) => updateTaskApi({ data, taskId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        active: false,
      });

      // console.log(data.data.item.project);
    },
  });

  return { updateTask, isLoading };
}
