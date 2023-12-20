import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { deleteTaskApi } from "../services/tasks";
export default function useDeleteTask() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: () => deleteTaskApi(taskId),
    onSuccess: () => {
      console.log("Successfull");
      navigate(-1);
    },
    onError: (e) => {
      console.log("error hook", e);
    },
  });

  return { deleteTask, isLoading };
}
