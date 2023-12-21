import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProject } from "../services/projects";

export default function useProjects() {
  const { userId } = useParams();
  console.log(userId);
  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProject(userId),
    retry: false,
  });
  return { isLoading, error, projects };
}
