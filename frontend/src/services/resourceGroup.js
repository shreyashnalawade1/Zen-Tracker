export const getAllResourceGroups = async function (projectId) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `http://localhost:8000/api/v1/resource-groups?projectId=${projectId}`,
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

export const createResourceGroup = async function (data) {
  const token = localStorage.getItem("token");

  await fetch("http://localhost:8000/api/v1/resource-groups", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });
  return "success";
  //   const resData = await res.json();
  //   return resData;
};
