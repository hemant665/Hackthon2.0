import React from "react";
import RightImage from "../../assets/right-square.png";
import { useForm } from "react-hook-form";

//icons
import { IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import Input from "../../Components/Input";

const BookADemo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      institutionName: "",
      phoneNumber: "",
      email: "",
      role: "",
      city: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  // const Input = ({ name, type = "text", error, label, placeholder }) => {
  //   return (
  //     <div className="w-full flex flex-col gap-2">
  //       <label
  //         htmlFor={`${name}-id`}
  //         className="font-medium text-sm tracking-wide"
  //       >
  //         {label}
  //       </label>
  //       <div>
  //         <input
  //           type={type}
  //           placeholder={placeholder}
  //           required
  //           maxLength={ type === 'number' ? 10 : undefined}
  //           onBlur={true}
  //           {...register(name, { required: error })}
  //           className="w-full outline-none border-2 border-gray-300 rounded-lg p-3"
  //         />
  //         {errors.name && (
  //           <p className="text-xs text-red-600 font-medium">
  //             {errors.name?.message}
  //           </p>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="w-full h-auto ">
      <div className="w-full max-w-[75rem] mx-auto grid sm:grid-cols-2 gap-10 ">
        <div className="relative w-full p-2 sm:p-10 bg-[#f3f7fe] flex flex-col gap-5 overflow-hidden rounded-lg">
          <div className=" text-3xl flex  items-center gap-2 font-bold">
            <span>Book a</span>
            <span className="text-sky-500">Demo</span>
          </div>
          <p className="text-black/50 font-medium tracking-wide">
            Ready to experience how Digii School can transform your institution?
            Take the first step by booking a demo session with us.
          </p>
          <button className="flex items-center gap-4 font-medium">
            <span className="p-2 rounded-full bg-sky-500 text-white">
              <IoIosCall className="text-xl" />
            </span>
            +91 7597683262
          </button>
          <button className="flex items-center gap-4 font-medium">
            <span className="p-2 rounded-full bg-sky-500 text-white">
              <GoMail className="text-xl" />
            </span>
            Contact@digiischool.com
          </button>
          <img
            src={RightImage}
            alt=""
            className="absolute w-[22rem] -right-12 bottom-0"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-between gap-5 px-3"
        >
          <Input
            label="Enter your full name"
            type="text"
            placeholder="i.e Bhawani Shankar"
            error={errors.fullName}
            {...register("fullName" , {required: "This field is required"})}

          />
          <Input
            label="Enter your institution name"
            type="text"
            placeholder="i.e xyz public school"
            error={errors.institutionName}
            {...register("institutionName" , {required: "This field is required"})}
          />
          <Input
            label="Enter your contact number"
            type="number"
            placeholder="i.e 987xxxxx25"
            error={errors.phoneNumber}
            {...register("phoneNumber", { required: "This field is required" })}
          />
          <Input
            label="Enter your email"
            type="email"
            placeholder="i.e deepak@example.com"
            error={errors.email}
            {...register("email", { required: "This field is required" })}
          />

          <div className="w-full flex flex-col justify-start gap-7 p-1">
            <div className="w-full grid sm:grid-cols-2 gap-5">
              <Input
                label="Your role in the organization?"
                placeholder="i.e Director"
                error={errors.role}
                {...register("role", { required: "This field is required" })}
              />
              <Input
                label="Located City"
                placeholder="i.e Jaipur"
                error={errors.city}
                {...register("city", { required: "This field is required" })}
              />
            </div>
          </div>
          <button className="w-full relative py-3 bg-sky-500 text-white font-medium rounded-md cursor-pointer">
            Request a Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookADemo;
