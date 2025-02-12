import ProjectForm from "@/components/ui/Project/ProjectForm";
import Link from "next/link";
import React from "react";

const CreateProjectPage = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden p-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        <Link href="/dashboard">Dashboard /</Link>
        <Link href="/dashboard/projects"> Projects /</Link>{" "}
        <span className="text-xl font-bold text-orange-600">
          Add New Project
        </span>
      </h2>

      <ProjectForm />
    </div>
  );
};

export default CreateProjectPage;
