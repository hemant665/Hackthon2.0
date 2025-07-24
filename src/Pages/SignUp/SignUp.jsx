import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import Input from "../../Components/Input";
import { ToastContainer, toast, Bounce } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   const [formData, setFormData] = useState({ email: "", password: "" });

  const onSubmit = (data) => {
    // console.log(data.email)
    const extestUser = JSON.parse(localStorage.getItem("users")) || [];
    // extestUser.push(data);
    const userExist = extestUser.find((user) => user.email == data.email);

    if (userExist) {
      toast.error("User is already exist", {
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
    } else {
      extestUser.push(data);
      localStorage.setItem("users", JSON.stringify(extestUser));
      toast.success("Sign Up Successfully", {
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
    <div className="relative w-full h-screen flex flex-col gap-4 justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <img
        src="https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="back image"
        className="absolute w-full h-full top-0 left-0 object-cover"
      />
      <div className="absolute w-full h-full bg-black/70" />
      <h2 className="relative text-4xl font-extrabold text-sky-500 cursor-pointer">
        Digii School
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-3 text-white relative w-full sm:w-[25rem] lg:w-[30rem] xl:w-[40rem] h-auto border border-gray-300 p-5 rounded-lg backdrop-blur-md"
      >
        <div className="w-full flex justify-between items-center mb-5">
          <h1 className=" text-2xl font-bold">Sign Up</h1>
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="text-2xl hover:text-sky-500 duration-300 cursor-pointer"
          >
            <IoHomeOutline />
          </button>
        </div>

        <div className="w-full flex flex-col gap-1">
          <Input
            label="First Name"
            {...register("firstName", { required: "this field is required" })}
          />
          <Input
            label="Last Name"
            {...register("lastName", { required: "this field is required" })}
          />
          <Input
            label="Email"
            type="email"
            {...register("email", { required: "this field is required" })}
          />
          <Input
            label="Password"
            type="password"
            {...register("password", { required: "this field is required" })}
          />
        </div>

        <button className="text-white font-semibold bg-sky-500 rounded px-7 py-2 w-max mx-auto cursor-pointer mt-4 hover:bg-sky-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
