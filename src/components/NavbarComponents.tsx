"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="h-full  flex justify-between items-center p-4 shadow-sm">
      <h1 className="font-black text-2xl text-blue-600">iProc</h1>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
}
