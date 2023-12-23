export const getChats = async function () {
  const token = localStorage.getItem("token");
  const res = await fetch(`http://localhost:8000/api/v1/chats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data;
};

export const fetchChat = async function (userId) {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:8000/api/v1/chats", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify({ userId }),
  });
  const resData = await res.json();
  return resData;
};
