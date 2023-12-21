export const getAllResourceGroups = async function (projectId) {
  const res = await fetch(
    `http://localhost:8000/api/v1/resource-groups?projectId=${projectId}`
  );
  const data = await res.json();
  return data;
};

export const createResourceGroup = async function (data) {
  await fetch("http://localhost:8000/api/v1/resource-groups", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });
  return "success";
  //   const resData = await res.json();
  //   return resData;
};
