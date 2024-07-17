"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Eye, EyeIcon } from "lucide-react";

export default function ViewButton({
  handleUpdate,
  user,
}: {
  handleUpdate: (user: userListInterface) => void;
  user: userListInterface;
}) {
  return (
    <Link href="/view-user">
      <Button
        onClick={() => handleUpdate(user)}
        className="flex gap-2 bg-blue-400 hover:bg-blue-700"
      >
        <EyeIcon className="w-6 h-6" />
        View Detail
      </Button>
    </Link>
  );
}
