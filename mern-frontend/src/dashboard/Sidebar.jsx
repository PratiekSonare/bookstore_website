import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiShoppingCart, HiTable, HiUpload, HiUser, HiUserAdd, HiViewBoards } from "react-icons/hi";

function Component() {
  return (
    <Sidebar aria-label="Default sidebar example" className="justify-start fixed top-0 left-0 h-screen w-48 bg-gray-100">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="flex justify-start items-center pl-4">
            <span>Dashboard</span>
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="flex justify-start items-center pl-4">
            <span>Manage</span>
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard/upload" icon={HiUpload} className="flex justify-start items-center pl-4">
            <span>Add a book</span>
          </Sidebar.Item>

          <Sidebar.Item href="/admin/dashboard" icon={HiShoppingBag} className="flex justify-start items-center pl-4">
            <span>Booklist</span>
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiUser} className="flex justify-start items-center pl-4">
            <span>User List</span>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingCart} className="flex justify-start items-center pl-4">

            <span>Orders</span>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Component;