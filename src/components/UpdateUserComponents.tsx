"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import SideBar from "./SideBar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useUpdateDataUserStore } from "@/stores/UpdateDataUserStore";
import { useToast } from "./ui/use-toast";
import { updateUser } from "@/api/api";
import BannerComponents from "./BannerComponents";

export default function UpdateUserComponents() {
  const { data: selectedData } = useUpdateDataUserStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userFormValuesInterface>({
    defaultValues: {
      id: selectedData?.id || 0,
      firstName: selectedData?.firstName || "",
      lastName: selectedData?.lastName || "",
      username: selectedData?.username || "",
      age: selectedData?.age || 0,
      gender: selectedData?.gender || "",
    },
  });
  const { toast } = useToast();

  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      toast({
        title: "Success",
        description: "User updated successfully",
        className: "bg-green-500 text-white",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update user",
        className: "bg-red-500",
      });
    },
  });

  const onSubmit: SubmitHandler<userFormValuesInterface> = (data) => {
    mutation.mutate(data);
  };

  return (
    <main className="flex min-h-screen">
      <SideBar />
      <div className="flex w-full flex-col">
        <BannerComponents />
        <section className="flex flex-col p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 p-16 bg-slate-100 h-screen rounded-lg"
          >
            <Input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              defaultValue={selectedData?.firstName}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs self-end">
                *First Name is required
              </span>
            )}
            <Input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              defaultValue={selectedData?.lastName}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs self-end">
                *Last Name is required
              </span>
            )}
            <Input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
              defaultValue={selectedData?.username}
            />
            {errors.username && (
              <span className="text-red-500 text-xs self-end">
                *Username is required
              </span>
            )}
            <Input
              type="number"
              placeholder="Usia"
              {...register("age", { required: true })}
              defaultValue={selectedData?.age}
            />
            {errors.age && (
              <span className="text-red-500 text-xs self-end">
                *Age is required
              </span>
            )}
            <Input
              type="text"
              placeholder="Jenis Kelamin"
              {...register("gender", { required: true })}
              defaultValue={selectedData?.gender}
            />
            {errors.gender && (
              <span className="text-red-500 text-xs self-end">
                *Gender is required
              </span>
            )}
            <Button type="submit" className="w-full bg-blue-500 font-bold">
              Submit
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
