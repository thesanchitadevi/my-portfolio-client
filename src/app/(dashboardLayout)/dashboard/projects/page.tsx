import { IProject } from "@/types";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardProjects = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  const projects = data.data.result;

  return (
    <div>
      <div className="w-full  rounded-lg overflow-hidden p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          <Link href="/dashboard">Dashboard /</Link>
          <span className="text-orange-600"> Projects</span>
        </h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-1">#</th>
              <th className="border border-gray-300 px-2 py-1">Title</th>
              <th className="border border-gray-300 px-2 py-1">Description</th>
              <th className="border border-gray-300 px-2 py-1">Tech Stacks</th>
              <th className="border border-gray-300 px-2 py-1">Link</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: IProject, index: number) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-2 py-3 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {project.title}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {project.description.slice(0, 50)}...
                  <Link
                    href={`/projects/${project._id}`}
                    className="text-orange-600 underline"
                  >
                    read more
                  </Link>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {project.techStack.join(", ")}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    Visit
                  </a>
                </td>
                <td className=" px-2 py-3 flex justify-center gap-2">
                  <button className="p-3">
                    <Pencil size={16} className="text-gray-700" />
                  </button>
                  <button className="p-3">
                    <Trash size={16} className="text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProjects;
