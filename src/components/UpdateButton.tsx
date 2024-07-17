"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Pen, PenIcon } from "lucide-react";

export default function UpdateButton({
  handleUpdate,
  user,
}: {
  handleUpdate: (user: userListInterface) => void;
  user: userListInterface;
}) {
  return (
    <Link href="/update-user">
      <Button onClick={() => handleUpdate(user)} className="bg-green-600 flex gap-2 hover:bg-green-800">
        <PenIcon className="w-6 h-6" />
        Update User</Button>
    </Link>
  );
}
