export const getAllResource = async function (groupId) {
  //   console.log(`http://localhost:8000/api/v1/resources?groupId=${groupId}`);
  //   return 0;
  const token = localStorage.getItem("token");

  const res = await fetch(
    `http://localhost:8000/api/v1/resources?groupId=${groupId}`,
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

export const createResource = async function (data) {
  const token = localStorage.getItem("token");

  await fetch(`http://localhost:8000/api/v1/resources`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });

  //   const resData = await res.json();
  //   return resData;
};
