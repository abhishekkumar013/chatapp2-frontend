import axios from "axios";
export const FtechContacts = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("http://localhost:8080/api/v1/users/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response;
};

export const FtechFilterUser = async (queryParams) => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `http://localhost:8080/api/v1/users/search?=${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response;
};
