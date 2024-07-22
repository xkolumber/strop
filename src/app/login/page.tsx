"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../auth/Provider";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const router = useRouter();
  const { user, login, logout, signup } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await login(data.email, data.password);

      router.push("/admin");
    } catch (err) {
      toast.error("Nesprávne email alebo heslo");
      // console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex  flex-col justify-center px-6 py-12 lg:px-8  pt-56 pb-56 min-h-[600px]">
      <h1 className="text-center my-3">Login</h1>
      <Toaster />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  justify-center items-center">
        <form onSubmit={handleLogin} className="">
          <div className="mb-3 products_admin">
            <label className="block font-medium leading-6 text-gray-900">
              Email
            </label>

            <input
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Vložte email"
              className="!w-full"
            />
          </div>

          <div className="mb-3 products_admin">
            <label className="block font-medium leading-6 text-gray-900">
              Heslo
            </label>
            <input
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Vložte heslo"
              className="!w-full"
            />
          </div>
          <button className="btn btn--primary w-full min-w-full" type="submit">
            {isLoading ? (
              <ClipLoader size={20} color={"#32a8a0"} loading={true} />
            ) : (
              "Prihlásiť sa"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
