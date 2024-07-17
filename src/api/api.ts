import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

export const fetchData = async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
};

export const login = async (data: LoginFormInterface) => {
  try {
    const response = await axiosInstance.post("/user/login", data);
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : new Error("An error occurred");
  }
};

export const addUser = async (data: userFormValuesInterface) => {
  const response = await axiosInstance.post("/users/add", data);
  return response.data;
};

export const updateUser = async (data: userFormValuesInterface) => {
  const response = await axiosInstance.put(`/users/${data.id}`, data);
  return response.data;
};

export const fetchListUser = async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
};

export const fetchSearchListUser = async (query: string) => {
  const { data } = await axiosInstance.get(`/users/search?q=${query}`);
  return data;
};

export const fetchSorOrdertListUser = async (sortBy: string, order: string) => {
  const { data } = await axiosInstance.get(
    `/users?sortBy=${sortBy}&order=${order}`
  );
  return data;
};

export const fetchCurrentUser = async () => {
  const { data } = await axiosInstance.get("/user/me", {
    headers: {
      Authorization: Cookies.get("Authorization"),
    },
  });
  return data;
};
// export const useData = () => {
//   return useQuery("dataKey", fetchData);
// };
