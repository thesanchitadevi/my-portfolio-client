import DashboardTableProject from "@/components/ui/Dashboard/DashboardProject";
import React from "react";

const DashboardProjects = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    next: { tags: ["projects"], revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  const projects = data.data.result;

  return (
    <div>
      <DashboardTableProject projects={projects} />
    </div>
  );
};

export default DashboardProjects;
