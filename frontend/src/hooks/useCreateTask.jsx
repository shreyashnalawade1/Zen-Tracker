import { useMutation } from "@tanstack/react-query";
import { createTaskApi } from "../services/tasks";
import { useNavigate, useParams } from "react-router";

export default function useCreateTask() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (data) => createTaskApi({ ...data, project: projectId }),
    onSuccess: () => {
      navigate(`/tasks/${projectId}`);
      console.log("Successfull");
    },
  });

  return { createTask, isLoading };
}
