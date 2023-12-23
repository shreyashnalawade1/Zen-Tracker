export const getTasks = async function (projectId) {
  const token = localStorage.getItem("token");
  const res = await fetch(
    `http://localhost:8000/api/v1/tasks?projectId=${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getTask = async function (taskId) {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:8000/api/v1/tasks/${taskId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const createTaskApi = async function (data) {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8000/api/v1/tasks", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};
export const updateTaskApi = async function (data) {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:8000/api/v1/tasks/${data.taskId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data.data),
  });
  const resData = await res.json();
  return resData;
};

export const deleteTaskApi = async function (taskId) {
  const token = localStorage.getItem("token");

  await fetch(`http://localhost:8000/api/v1/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  // const resData = await res.json();
  // return resData;.
};
