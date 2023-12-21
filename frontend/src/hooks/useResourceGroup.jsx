import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getAllResourceGroups } from "../services/resourceGroup";

export default function useResourceGroup() {
  const { projectId } = useParams();
  const {
    isLoading,
    data: resourcesGroups,
    error,
  } = useQuery({
    queryKey: ["resourceGroup", projectId],
    queryFn: () => getAllResourceGroups(projectId),
    retry: false,
  });
  return { isLoading, error, resourcesGroups };
}
