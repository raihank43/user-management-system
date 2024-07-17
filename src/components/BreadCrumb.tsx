import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export function BreadcrumbDemo() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <div className="bg-gray-100 rounded-full p-2 font-semibold text-xs">
            <Link href="/">Dashboard</Link>
          </div>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          ...
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <div className="bg-gray-100 rounded-full p-2 font-semibold text-xs">
          <Link href={`${pathname}`}>
            {pathname == "/add-user"
              ? "Create New User"
              : pathname == "/update-user"
              ? "Update A User"
              : pathname == "view-user"
              ? "User Detail"
              : ""}
          </Link>
        </div>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
