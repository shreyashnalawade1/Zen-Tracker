import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../services/users";

export default function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      // todo
      console.log("Success", user);
    },
    onError: (err) => {
      console.log("ERROR", err);
      //todo
      // toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
