import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getAllResource } from "../services/resources";

export default function useResource() {
  const { groupId } = useParams();
  const {
    isLoading,
    data: resources,
    error,
  } = useQuery({
    queryKey: ["resource", groupId],
    queryFn: () => getAllResource(groupId),
    retry: false,
  });
  return { isLoading, error, resources };
}
