"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, LoaderCircle, User2Icon } from "lucide-react";
import Image from "next/image";
import { FieldValue, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useUserLogin } from "@/hooks/useUserLogin";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { toast } = useToast();
  const {
    data,
    isLoading,
    mutate: login,
    isSuccess,
    isError,
    error,
  } = useUserLogin();
  const router = useRouter();

  const onSubmit = (data: FieldValue<LoginFormInterface>) => {
    login(data as LoginFormInterface);
  };

  // if (isLoading) return <div>Loading...</div>;

  useEffect(() => {
    if (isSuccess) {
      // setApiResponse(data);
      // Set token in cookies
      Cookies.set("Authorization", data.token, { expires: 7 }); // Set cookie to expire in 7 days
      toast({
        title: "Success.",
        description: "Login successful",
        className: "bg-green-500 border-none text-white",
      });
      router.replace("/");
      // setApiError(null);
    }
    if (isError) {
      // setApiError(errors);
      console.log({ error }, "error");
      toast({
        title: "Error.",
        description: error.message,
        className: "bg-red-500 border-none text-white",
      });
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    document.title = "Login | iProc";
    const token = Cookies.get("Authorization");
    if (token) {
      router.replace("/");
    }
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen bg-cyan-500">
      <div className="flex gap-20 shadow-2xl bg-white rounded-lg">
        <div className="p-10 w-1/2 border-r-2  my-5">
          <div className="flex flex-col gap-2 border-b-2 pb-2 mb-5">
            <h1 className="text-2xl font-bold text-blue-700">
              Masuk ke Platform iProc
            </h1>
            <p className="text-sm text-slate-500">
              Sistem modernisasi pengadaan barang dan jasa elektronik
            </p>
          </div>

          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 w-full">
                <User2Icon size={24} />
                <Input
                  type="text"
                  placeholder="Username"
                  className="w-full"
                  {...register("username", { required: true })}
                />
              </div>
              {errors.username && (
                <span className="text-red-500 text-xs self-end">
                  *Username is required
                </span>
              )}
            </div>

            <div className="mt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 w-full">
                  <Key size={24} />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="w-full"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-xs self-end">
                    *Password is required
                  </span>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-4 bg-blue-500 font-bold"
              disabled={isLoading}
            >
              {isLoading ? (
                <LoaderCircle size={24} className="animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
          </form>

          {/* {apiResponse && (
            <div className="mt-4 text-green-500">
              Login successful: {JSON.stringify(apiResponse)}
            </div>
          )}
          {apiError && (
            <div className="mt-4 text-red-500">Error: {apiError}</div>
          )} */}
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1721060407~exp=1721064007~hmac=6c741333f709549cc241d975c875cb70b0d4297fd9f24305f83ad7c092ec8393&w=740"
            alt="Login"
            width={250}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
