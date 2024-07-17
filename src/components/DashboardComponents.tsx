"use client";

import SideBar from "./SideBar";
import UserListTable from "./UserListTable";
import UserDataManagementComponents from "./UserDataManagementComponents";
import { BreadcrumbDemo } from "./BreadCrumb";
import BannerComponents from "./BannerComponents";

export default function DashboardComponents() {
  return (
    <main className="flex min-h-screen   ">
      <SideBar />
      <div className="flex w-full flex-col">
        <BannerComponents />

        <section className="flex flex-col p-6 bg-gray-100 max-w-screen-lg">
          <UserDataManagementComponents />

          <UserListTable />
        </section>
      </div>
    </main>
  );
}
