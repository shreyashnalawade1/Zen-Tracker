export const singupApi = async function (data) {
  const res = await fetch("http://localhost:8000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};
export const loginApi = async function (data) {
  const res = await fetch("http://localhost:8000/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: JSON.stringify(data),
  });
  const resData = await res.json();
  return resData;
};

export const getCurrentUserApi = async function () {
  const token = localStorage.getItem("token");
  const res = await fetch(
    `http://localhost:8000/api/v1/users/currentUser?token=${token}`
  );
  const data = res.json();
  return data;
};

export const getSearchUser = async function (keyWord) {
  const token = localStorage.getItem("token");
  const res = await fetch(
    `http://localhost:8000/api/v1/users/search?name=${keyWord}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.json();

  return data;
};
