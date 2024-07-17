import { login } from "@/api/api";
import { cookies } from "next/headers";
import { useMutation } from "react-query";

const postUserData = async (data: LoginFormInterface) => {
  const response = await login(data);
  return response as userLoginInterface;
};

export const useUserLogin = () => {
  return useMutation((data: LoginFormInterface) => login(data), {
    onSuccess: (data) => {
      // Handle success state
      console.log("Login successful:", data);
    },
    onError: (error: any) => {
      // Handle error state
      console.error("Login error:", error);
      return error;
    },
  });
};
