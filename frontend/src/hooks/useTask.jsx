import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTask } from "../services/tasks";
// import { getTask } from "../../../backend/controllers/taskController";

export default function useTask() {
  const { taskId } = useParams();
  const {
    isLoading,
    data: task,
    error,
  } = useQuery({
    queryKey: ["task", taskId],
    queryFn: () => getTask(taskId),
    retry: false,
  });
  return { isLoading, error, task };
}
