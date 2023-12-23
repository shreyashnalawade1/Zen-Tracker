import { useMutation } from "@tanstack/react-query";
import { singupApi } from "../services/users";
import { useNavigate } from "react-router";

export default function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: (data) => {
      navigate(`/projects/${data?.data?.user?._id}`);
      localStorage.setItem("token", data?.token);

      console.log("Successfull");
    },
  });

  return { signup, isLoading };
}
