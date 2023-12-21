import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../services/users";
import { useNavigate } from "react-router";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      // todo
      queryClient.setQueryData(["user"], user.user);
      localStorage.setItem("token", user?.token);
      // console.log(user);
      navigate(`/projects/${user?.data?.user?._id}`);

      console.log("Success");
    },
    onError: (err) => {
      console.log("ERROR", err);
      //todo
      // toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
