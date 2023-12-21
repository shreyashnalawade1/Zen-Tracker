import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../services/users";

export default function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });

  return { isLoading, user };
}
