import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTasks } from "../services/tasks";

export default function useTasks() {
  const { projectId } = useParams();

  const {
    isLoading,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => getTasks(projectId),
    retry: false,
  });
  return { isLoading, error, tasks };
}
