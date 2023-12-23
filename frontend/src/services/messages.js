export const getAllMessages = async function (chatId) {
  const token = localStorage.getItem("token");

  const res = await fetch(`http://localhost:8000/api/v1/messages/${chatId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const sendMessageApi = async function (data) {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:8000/api/v1/messages", {
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
