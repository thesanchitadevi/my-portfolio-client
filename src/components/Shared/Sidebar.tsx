"use client";

import {
  ArrowLeftFromLine,
  FileText,
  FolderIcon,
  HomeIcon,
  MessageSquare,
  PlusIcon,
  SquarePen,
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
      name: "Home",
      icon: HomeIcon,
      path: "/",
    },
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
        { name: "Read", path: "/dashboard/projects", icon: FileText },
      ],
    },
    {
      name: "Blogs",
      icon: SquarePen,
      submenus: [
        { name: "Create", path: "/dashboard/blogs/create", icon: PlusIcon },
        { name: "Read", path: "/dashboard/blogs", icon: FileText },
      ],
    },
    {
      name: "Messages",
      icon: MessageSquare,
      path: "/dashboard/messages",
    },
  ];

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 w-64 bg-black text-white fixed left-0 top-0  border-r border-gray-700 ">
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
          <div className="flex items-center space-x-3">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeftFromLine className="h-5 w-5" />
              <span>{session?.user ? "Logout" : "Login"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
