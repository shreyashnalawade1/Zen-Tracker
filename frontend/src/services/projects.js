export const getProject = async function (userId) {
  const res = await fetch(
    `http://localhost:8000/api/v1/projects?userId=${userId}`
  );
  const data = await res.json();
  return data;
};

export const createProjectApi = async function (data) {
  const token = localStorage.getItem("token");

  await fetch("http://localhost:8000/api/v1/projects", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });
};
