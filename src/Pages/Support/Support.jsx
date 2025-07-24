import React from "react";
import RightImage from "../../assets/right-square.png";
import { useForm } from "react-hook-form";

//icons
import { IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { ImWhatsapp } from "react-icons/im";

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
  };

  const Input = ({ name, type = "text", error, label, placeholder }) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <label
          htmlFor={`${name}-id`}
          className="font-medium text-sm tracking-wide"
        >
          {label}
        </label>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            {...register(name, { required: error })}
            className="w-full outline-none border-2 border-gray-300 rounded-lg p-3"
          />
          {errors.name && (
            <p className="text-xs text-red-600 font-medium">
              {errors.name.message}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-auto mt-15 pb-20">
      <div className="w-full max-w-[75rem] mx-auto grid md:grid-cols-2 gap-10 bg-white border p-5 md:p-10 rounded-2xl border-gray-300 drop-shadow-2xl">
        <div className="relative w-full p-10 bg-[#f3f7fe] flex flex-col gap-5 overflow-hidden rounded-lg">
          <div className=" text-3xl flex items-center gap-2 font-bold">
            <span>Help &</span>
            <span className="text-sky-500">Support</span>
          </div>
          <p className="text-black/50 font-medium tracking-wide">
            If you can’t find the answer you’re looking for or need further
            assistance, don’t hesitate to reach out to our dedicated support
            team.
          </p>
          <button className="flex items-center gap-4 font-medium">
            <span className="p-2 rounded-full bg-sky-500 text-white">
              <IoIosCall className="text-xl" />
            </span>
            +91 7597683262
          </button>
          <button className="flex items-center gap-4 font-medium">
            <span className="p-2 rounded-full bg-sky-500 text-white">
              <ImWhatsapp className="text-xl" />
            </span>
            +91 7597683262
          </button>
          <button className="flex items-center gap-4 font-medium">
            <span className="p-2 rounded-full bg-sky-500 text-white">
              <GoMail className="text-xl" />
            </span>
            Info@digiischool.com
          </button>
          <img
            src={RightImage}
            alt=""
            className="absolute w-[22rem] -right-12 bottom-0"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-between gap-5"
        >
          <div className="w-full flex flex-col justify-start gap-7">
            <Input
              error={"please enter your full name"}
              label={"Enter your full name"}
              name={"fullName"}
              placeholder={"i.e Bhawani Shankar"}
              type="text"
            />
            <Input
              error={"please enter your Institution name"}
              label={"Enter your institution name"}
              name={"fullName"}
              placeholder={"i.e xyz sr. sec. school"}
              type="text"
            />
            <Input
              error={"please enter your contact number"}
              label={"Enter your contact number"}
              name={"fullName"}
              placeholder={"i.e 98xxxxxx98"}
              type="text"
            />
            <div className="w-full grid sm:grid-cols-2 gap-5">
              <Input
                error={"please enter your Organization"}
                label={"Your role in the organization?"}
                name={"fullName"}
                placeholder={"i.e Director"}
                type="text"
              />
              <Input
                error={"please enter your Located City"}
                label={"Located City"}
                name={"fullName"}
                placeholder={"i.e Jaipur"}
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor={`message`}
                className="font-medium text-sm tracking-wide"
              >
                {"Your Query"}
              </label>
              <div>
                <textarea
                  rows={4}
                  placeholder={"type your query here"}
                  {...register("query", {
                    required: "please write your query",
                  })}
                  className="w-full outline-none border-2 border-gray-300 rounded-lg p-3"
                />
                {errors.message && (
                  <p className="text-xs text-red-600 font-medium">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-sky-500 text-white font-medium rounded-md cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
