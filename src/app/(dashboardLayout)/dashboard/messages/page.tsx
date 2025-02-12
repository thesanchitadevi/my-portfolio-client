import { IContact } from "@/types";
import Link from "next/link";
import React from "react";

const DashboardMessages = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/messages`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch messages");
  }

  const data = await res.json();
  const messages = data.data.result;

  return (
    <div>
      <div className="w-full  rounded-lg overflow-hidden p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          <Link href="/dashboard">Dashboard /</Link>
          <span className="text-orange-600"> Messages</span>
        </h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-1">#</th>
              <th className="border border-gray-300 px-2 py-1">Name</th>
              <th className="border border-gray-300 px-2 py-1">Email</th>
              <th className="border border-gray-300 px-2 py-1">Messages</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message: IContact, index: number) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-2 py-3 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {message.name}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {message.email}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {message.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardMessages;
