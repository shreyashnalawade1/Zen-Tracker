import { useMutation } from "@tanstack/react-query";
import { singupApi } from "../services/users";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: () => {
      console.log("Successfull");
    },
  });

  return { signup, isLoading };
}
