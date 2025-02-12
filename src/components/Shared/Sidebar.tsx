"use client";

import {
  ArrowLeftFromLine,
  FileText,
  FolderIcon,
  MessageSquare,
  PencilIcon,
  PlusIcon,
  SquarePen,
  TrashIcon,
  UserCircleIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  name: string;
  icon: React.ElementType;
  path?: string;
  submenus?: SubMenuItem[];
};

type SubMenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

type TUserProps = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Sidebar = ({ session }: { session: TUserProps | null }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menus: MenuItem[] = [
    {
      name: "Profile",
      icon: UserCircleIcon,
      path: "/dashboard",
    },
    {
      name: "Projects",
      icon: FolderIcon,
      submenus: [
        { name: "Create", path: "/dashboard/projects/create", icon: PlusIcon },
        { name: "Read", path: "/projects", icon: FileText },
        { name: "Update", path: "/projects/update", icon: PencilIcon },
        { name: "Delete", path: "/projects/delete", icon: TrashIcon },
      ],
    },
    {
      name: "Blogs",
      icon: SquarePen,
      submenus: [
        { name: "Create", path: "/blogs/create", icon: PlusIcon },
        { name: "Read", path: "/blogs", icon: FileText },
        { name: "Update", path: "/blogs/update", icon: PencilIcon },
        { name: "Delete", path: "/blogs/delete", icon: TrashIcon },
      ],
    },
    {
      name: "Messages",
      icon: MessageSquare,
      submenus: [
        { name: "Create", path: "/messages/create", icon: PlusIcon },
        { name: "Read", path: "/blogs", icon: FileText },
      ],
    },
  ];

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 w-64 bg-gray-800 text-white fixed left-0 top-0 ">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-orange-600">
            {session?.user?.name}&apos;s{" "}
            <span className="text-white ">Dashboard</span>
          </h1>
        </div>

        <nav className="space-y-2">
          {menus.map((menu) => (
            <div key={menu.name}>
              {menu.path ? (
                <Link
                  href={menu.path}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <menu.icon className="h-5 w-5" />
                  <span>{menu.name}</span>
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleMenu(menu.name)}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <menu.icon className="h-5 w-5" />
                    <span>{menu.name}</span>
                  </button>

                  {openMenu === menu.name && (
                    <div className="ml-8 space-y-2 mt-2">
                      {menu.submenus?.map((submenu) => (
                        <Link
                          key={submenu.path}
                          href={submenu.path}
                          className="flex items-center space-x-3 p-2 text-sm hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <submenu.icon className="h-4 w-4" />
                          <span>{submenu.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-4">
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeftFromLine className="h-5 w-5" />
              <span>Logout</span>
            </button>
          ) : (
            <Link
              href="/login"
              className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
