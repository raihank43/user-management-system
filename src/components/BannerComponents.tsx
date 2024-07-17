import { usePathname } from "next/navigation";
import { BreadcrumbDemo } from "./BreadCrumb";

export default function BannerComponents() {
  const pathname = usePathname();
  return (
    <div className="p-6 w-full flex flex-col gap-4">
      <BreadcrumbDemo />
      <h1 className="text-2xl font-bold text-blue-600">
        {pathname == "/"
          ? "User List"
          : pathname == "/add-user"
          ? "Create New User"
          : pathname == "/update-user"
          ? "Update A User"
          : pathname == "view-user"
          ? "User Detail"
          : ""}
      </h1>
    </div>
  );
}
