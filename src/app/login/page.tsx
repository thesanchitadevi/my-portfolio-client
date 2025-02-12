/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Typewriter } from "react-simple-typewriter";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = (provider: string) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // console.log(data);
    try {
      const res = await loginUser(data);
      //   console.log({ res });
      if (res.accessToken) {
        alert(res.message);
        localStorage.setItem("accessToken", res.accessToken);
        router.push("/dashboard"); // router.push to redirect to the dashboard page
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-sky-300 to-orange-200 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute w-full h-full">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 40 + 10; // Generate size once for both dimensions
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 5}s`,
              }}
            />
          );
        })}

        <div className="min-h-screen flex flex-col items-center justify-center p-5">
          <h1 className="text-xl font-bold mb-6 text-gray-100">
            <Typewriter
              words={["Login to your account", "Welcome back!"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div className="relative z-10 space-y-6 w-full max-w-md bg-slate-50 py-6 px-5 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full border border-orange-500 text-orange-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-orange-500 hover:text-white"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mt-4 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-orange-500 hover:underline"
              >
                Create an account
              </Link>
            </p>

            <p className="text-center mt-6 text-sm text-gray-500">
              Or Sign Up Using
            </p>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl:
                      "https://my-portfolio-client-seven.vercel.app/dashboard",
                  })
                }
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              >
                <Image
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  width={30}
                  height={30}
                  alt="Google logo"
                />
              </button>
              <button
                // signIn function from next-auth/react package to sign in with GitHub provider and redirect to the dashboard page using the callbackUrl option
                onClick={() =>
                  signIn("github", {
                    callbackUrl:
                      "https://my-portfolio-client-seven.vercel.app/dashboard",
                  })
                }
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width={25}
                  height={25}
                  alt="GitHub logo"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
