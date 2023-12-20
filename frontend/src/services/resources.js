export const getAllResource = async function (groupId) {
  //   console.log(`http://localhost:8000/api/v1/resources?groupId=${groupId}`);
  //   return 0;
  const res = await fetch(
    `http://localhost:8000/api/v1/resources?groupId=${groupId}`
  );
  const data = await res.json();
  return data;
};
