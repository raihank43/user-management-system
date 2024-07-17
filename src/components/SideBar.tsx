"use client";

import Link from "next/link";
import LoggedProfile from "./LoggedProfile";
import {
  ArrowBigDown,
  ArrowDown01,
  HouseIcon,
  LucideDatabase,
  Plus,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  return (
    <div className="min-h-full  w-1/4 bg-blue-200 rounded-r-lg shadow-lg">
      <div className="p-6 rounded-lg">
        <LoggedProfile />
      </div>

      <div className="p-6 gap-3 flex flex-col ">
        <Link
          href="/"
          className="font-bold text-blue-600 text-lg flex gap-3 items-center hover:text-blue-300 bg-slate-50 p-4 rounded-lg"
        >
          <HouseIcon size={24} className="w-5 h-5" />
          Dashboard
        </Link>
        <div className="font-bold text-blue-600 text-lg flex flex-col gap-3 items-center  bg-slate-50 p-4 rounded-lg">
          <div className="flex gap-3 items-center">
            <LucideDatabase size={24} className="w-5 h-5" />
            Admin Management
            <ArrowDown01
              className="w-10 h-10 hover:text-blue-200"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {isOpen && (
            <div className="flex flex-col gap-2">
              <Link
                href="/add-user"
                className="flex gap-2 items-center hover:text-blue-200"
              >
                <Plus size={24} className="w-5 h-5" />
                Add User
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
