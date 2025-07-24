import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { ToastContainer, toast, Bounce } from "react-toastify";

import Input from "../../Components/Input";

import BackgroundImg from "../../assets/LoginImg/Black Purple Modern Website Design And Development Banner.jpg";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    let users = JSON.parse(localStorage.getItem("users"));

    const isUser = users.find(
      (user) => user.email == data.email && user.password == data.password
    );

    if (isUser) {
      navigate("/");
    } else {
      toast.error("User Not Found", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      reset();
    }
  };

  return (
    <div className="relative w-full h-screen grid md:grid-cols-2 grid-cols-1 items-center justify-items-center   p-3 lg:p-20 bg-gradient-to-bl from-sky-600 via-gray-300 to-sky-300">
      
      <div className='w-full z-20 relative flex flex-col gap-5 lg:items-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 sm:ml-10 md:m-0"
        >
           <h2 className="relative text-4xl font-extrabold text-sky-600 cursor-pointer">
          Digii School
        </h2>
        <div className="w-full lg:w-[27rem]  flex flex-col gap-3 text-white relative  h-auto border border-gray-300 p-5 rounded-lg   backdrop-blur-md shadow-lg bg-black/20 shadow-black">
          <div className="w-full flex justify-between items-center mb-5">
            <h1 className=" text-2xl font-bold">Login</h1>
            <button
              type="button"
              className="text-2xl hover:text-sky-500 duration-300 cursor-pointer"
            >
              <IoHomeOutline />
            </button>
          </div>

          <div className="w-full flex flex-col gap-5">
            <Input
              label="Email"
              {...register("email", { required: "this field is required" })}
              error={errors.email?.message}
            />
            <Input
              label="Password"
              type="password"
              {...register("password", { required: "this field is required" })}
              error={errors.password?.message}
            />
          </div>

          <div className="flex flex-col items-center gap-4 mt-4">
            <button className="text-white font-semibold bg-sky-600 rounded px-7 py-2 w-max mx-auto cursor-pointer hover:bg-sky-500">
              Login
            </button>
            <p className="text-sm">
              Can't have any account?{" "}
              <a href="/signup" className="text-sky-600 leading-2 underline">
                Register
              </a>
            </p>
          </div>
          </div>
        </form>
      </div>

      <div className="absolute hidden md:flex max-w-[90rem] h-[30rem] mx-auto p-7">
        <div className="relative w-full h-full shadow-2xl shadow-black rounded-2xl ">
        <img
        src={BackgroundImg}
        alt="back image"
        className="relative w-full  h-[43rem]  object-cover rounded-2xl "
      />  
        </div>
      </div>

      
      
      


    </div>
  );
};

export default Login;
