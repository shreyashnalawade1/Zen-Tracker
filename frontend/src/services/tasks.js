export const getTasks = async function (projectId) {
  const res = await fetch(
    `http://localhost:8000/api/v1/tasks?projectId=${projectId}`
  );
  const data = await res.json();
  return data;
};

export const getTask = async function (taskId) {
  const res = await fetch(`http://localhost:8000/api/v1/tasks/${taskId}`);
  const data = await res.json();
  return data;
};

export const createTaskApi = async function (data) {
  const res = await fetch("http://localhost:8000/api/v1/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};
export const updateTaskApi = async function (data) {
  const res = await fetch(`http://localhost:8000/api/v1/tasks/${data.taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data.data),
  });
  const resData = await res.json();
  return resData;
};

export const deleteTaskApi = async function (taskId) {
  await fetch(`http://localhost:8000/api/v1/tasks/${taskId}`, {
    method: "DELETE",
  });
  // const resData = await res.json();
  // return resData;.
};
