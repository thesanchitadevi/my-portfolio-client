"use client";
import { createProject } from "@/actions/createProject";
import { ImageIcon, Link2, Plus, Text, Wrench } from "lucide-react";
import Form from "next/form";
import { useState } from "react";

const ProjectForm = () => {
  const [techStackItems, setTechStackItems] = useState<string[]>([]);
  const [currentTech, setCurrentTech] = useState("");

  const handleAddTech = () => {
    if (currentTech.trim()) {
      setTechStackItems([...techStackItems, currentTech.trim()]);
      setCurrentTech("");
    }
  };

  return (
    <div>
      <Form action={createProject} className="max-w-2xl space-y-6">
        {/* Title Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-100">
            <Text size={18} />
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Project Title"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Description Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-100">
            <Text size={18} />
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Project Description"
            className="w-full p-2 border rounded-md h-32 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Live Link Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-100">
            <Link2 size={18} />
            Live Demo URL
          </label>
          <input
            type="url"
            id="liveLink"
            name="liveLink"
            placeholder="https://example.com"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Tech Stack Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-100">
            <Wrench size={18} />
            Technology Stack
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="techStack"
              placeholder="Add a technology"
              className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              value={currentTech}
              onChange={(e) => setCurrentTech(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddTech}
              className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
            >
              <Plus size={20} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStackItems.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-gray-100 rounded-md dark:bg-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
          {techStackItems.map((tech, index) => (
            <input key={index} type="hidden" name="techStack" value={tech} />
          ))}
        </div>

        {/* Image URL Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-100">
            <ImageIcon size={18} />
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="https://example.com/image"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
        >
          Save Project
        </button>
      </Form>
    </div>
  );
};

export default ProjectForm;
