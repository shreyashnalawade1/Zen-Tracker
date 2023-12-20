export const getAllResourceGroups = async function (projectId) {
  const res = await fetch(
    `http://localhost:8000/api/v1/resource-groups?projectId=${projectId}`
  );
  const data = await res.json();
  return data;
};
