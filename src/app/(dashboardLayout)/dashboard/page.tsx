import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log({ session });

  return (
    <div className="text-center">
      {session?.user ? (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <Image
            src={
              session?.user?.image ||
              "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
            }
            alt="userimg"
            width={50}
            height={50}
            className="rounded-full mx-auto mt-5"
          />
          <p className="text-gray-500 mt-5">
            You are logged in with your email and your email is{" "}
            <span className="text-blue-500">{session?.user?.email}</span>
          </p>
        </>
      ) : (
        <h1 className="text-4xl text-center mt-10">You are not logged in</h1>
      )}
    </div>
  );
};

export default DashboardPage;
