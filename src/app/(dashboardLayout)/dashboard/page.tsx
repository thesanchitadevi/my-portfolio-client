import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full rounded-lg overflow-hidden p-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        <Link href="/dashboard">Dashboard /</Link>
        <span className="text-orange-600"> Profile</span>
      </h2>
      <section className="flex flex-col font-medium items-center justify-center h-screen">
        {session?.user ? (
          <>
            <h1 className="text-4xl text-center mt-5">
              Welcome{" "}
              <span className="text-orange-700 font-semibold">
                {session?.user?.name}
              </span>
            </h1>
            <p className="text-gray-500 mt-5">
              You are logged in with your email and your email is{" "}
              <span className="text-orange-500">{session?.user?.email}</span>
            </p>
            <section className="w-64 mx-auto bg-[#ecedee] rounded-2xl px-8 py-6 shadow-lg mt-10">
              <div className="mt-6 w-fit mx-auto">
                <Image
                  src={
                    session?.user?.image ||
                    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  }
                  width={100}
                  height={100}
                  className="rounded-full w-28 "
                  alt="profile picture"
                />
              </div>

              <div className="mt-8 ">
                <h2 className="text-gray-800 font-bold text-2xl tracking-wide">
                  {session?.user?.name}
                </h2>
              </div>
              <p className="text-orange-400 font-semibold mt-2.5">Active</p>

              <div className="mt-3 text-gray-700 text-sm">
                <span className="text-gray-800 font-semibold">Email </span>
                <span>{session?.user?.email}</span>
              </div>
            </section>
          </>
        ) : (
          <h1 className="text-4xl text-center mt-10">You are not logged in</h1>
        )}
      </section>
    </div>
  );
};

export default DashboardPage;
