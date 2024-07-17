"use client";
import { useCurrentLogUserStore } from "@/stores/CurrentLogUserStore";
import Image from "next/image";

export default function LoggedProfile() {
  const { data, loading } = useCurrentLogUserStore();
  if (loading) {
    return (
      <div className="p-6 flex gap-4 items-center border-b-2 border-r-0  bg-slate-50">
        Loading...
      </div>
    );
  }
  return (
    <div className="p-6 flex gap-4 items-center bg-blue-400 rounded-lg shadow-md">
      <div>
        <Image
          src={data.image}
          alt="avatar"
          width={50}
          height={50}
          className="roundedd-full"
        />
      </div>

      <div>
        <h1 className="font-bold text-white">{data.firstName + " " + data.lastName}</h1>
        <p className="text-sm text-white">@{data.username}</p>
      </div>
    </div>
  );
}
