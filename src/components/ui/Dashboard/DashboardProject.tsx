"use client";

import { deleteProject, updateProject } from "@/actions/action";
import { IProject } from "@/types";
import { validateUrl } from "@/utils/validateURL";
import { Pencil, Trash } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardTableProject = ({ projects }: { projects: IProject[] }) => {
  const [editProject, setEditProject] = useState<IProject | null>(null);

  // Close modal when blogs data changes
  useEffect(() => {
    setEditProject(null);
  }, [projects]);

  return (
    <div>
      {" "}
      <div className="w-full  rounded-lg overflow-hidden p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          <Link href="/dashboard">Dashboard /</Link>
          <span className="text-orange-600"> Projects</span>
        </h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">#</th>
              <th className="border border-gray-300 px-2 py-1">Title</th>
              <th className="border border-gray-300 px-2 py-1">Description</th>
              <th className="border border-gray-300 px-2 py-1">Tech Stacks</th>
              <th className="border border-gray-300 px-2 py-1">Link</th>
              <th className="border border-gray-300 px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: IProject) => (
              <tr key={project._id} className="border border-gray-300">
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
                    href={validateUrl(project.liveLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 underline hover:text-orange-800 transition-colors"
                  >
                    {project.liveLink}
                  </a>
                </td>
                <td className="px-2 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => setEditProject(project)}
                    className="p-3 hover:bg-gray-100 rounded"
                  >
                    <Pencil size={16} className="text-gray-700" />
                  </button>
                  <Form action={deleteProject}>
                    <input type="hidden" name="id" value={project._id} />
                    <button
                      type="submit"
                      className="p-3 hover:bg-gray-100 rounded"
                    >
                      <Trash size={16} className="text-red-700" />
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Edit Modal */}
        {editProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
              <h2 className="text-xl font-bold mb-4">Edit Project</h2>
              <Form action={updateProject} className="space-y-4">
                <input type="hidden" name="id" value={editProject?._id} />

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    name="title"
                    defaultValue={editProject?.title}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editProject?.description}
                    className="w-full p-2 border rounded h-32"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tech Stacks
                  </label>
                  <input
                    name="techStack"
                    defaultValue={editProject?.techStack.join(", ")}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Link</label>
                  <input
                    name="liveLink"
                    defaultValue={editProject?.liveLink}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditProject(null)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
                  >
                    Save Changes
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardTableProject;
