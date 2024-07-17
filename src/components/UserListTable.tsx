import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserListStore } from "@/stores/UserListStore";
import ViewButton from "./ViewButton";
import UpdateButton from "./UpdateButton";
import { useUpdateDataUserStore } from "@/stores/UpdateDataUserStore";
import Image from "next/image";

export default function UserListTable() {
  const { data, loading } = useUserListStore();
  const { setData: saveSelectedData } = useUpdateDataUserStore();

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center bg-gray-100">
        <h1 className="font-semibold">Loading...</h1>
      </div>
    );
  }

  const handleUpdate = (user: userListInterface) => {
    saveSelectedData(user);
  };

  return (
    <div className="shadow-lg rounded-lg max-w-screen-lg">
      <Table className="rounded-2xl shadow-lg bg-white divide-y divide-gray-200 max-w-screen-lg">
        {/* <TableCaption className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Daftar invoice terbaru Anda
        </TableCaption> */}
        <TableHeader className="bg-gray-50 rounded-lg">
          <TableRow>
            <TableHead className="px-6 py-3 text-left text-xs  font-black text-gray-500 uppercase tracking-wider rounded-lg">
              Avatar
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs  font-black text-gray-500 uppercase tracking-wider rounded-lg">
              User
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
              Jenis Kelamin
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
              Password
            </TableHead>
            <TableHead className="px-6 py-3 text-left text-xs font-black text-gray-500 uppercase tracking-wider">
              Usia
            </TableHead>
            <TableHead className="px-6 py-3 text-center text-xs font-black text-gray-500 uppercase tracking-wider">
              Name
            </TableHead>
            <TableHead className="px-6 py-3 text-center text-xs font-black text-gray-500 uppercase tracking-wider">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white divide-y divide-gray-200">
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                <Image
                  src={user.image}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {user.username}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {user.gender}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {user.password}
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap">
                {user.age}
              </TableCell>
              <TableCell className="px-6 py-4 text-right whitespace-nowrap">
                {user.firstName + " " + user.lastName}
              </TableCell>
              <TableCell className="py-4 text-center whitespace-nowrap flex gap-2">
                <ViewButton handleUpdate={handleUpdate} user={user} />
                <UpdateButton handleUpdate={handleUpdate} user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter className="bg-gray-50">
          <TableRow>
            <TableCell
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              colSpan={3}
            >
              Total
            </TableCell>
            <TableCell className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              $2,500.00
            </TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}
