"use client";
import Cookies from "js-cookie";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { DoorOpen } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("Authorization");
    router.push("/login");
  };
  return (
    <Button
      className="bg-transparent font-bold text-red-600 hover:bg-transparent hover:text-red-800"
      onClick={handleLogout}
    >
      <DoorOpen className="h-6 w-6 mr-2" />
      Logout
    </Button>
  );
}
