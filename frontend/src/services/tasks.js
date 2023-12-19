export const getTasks = async function (projectId) {
  console.log(`http://localhost:8000/api/v1/tasks?projectId=${projectId}`);
  const res = await fetch(
    `http://localhost:8000/api/v1/tasks?projectId=${projectId}`
  );
  const data = await res.json();
  return data;
};
