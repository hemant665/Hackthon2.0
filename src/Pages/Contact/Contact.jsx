import React from "react";
import RightImage from "../../assets/right-square.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//icons
import { IoIosCall } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import Input from "../../Components/Input";

const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:'onBlur',
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

  return (
    <div className="w-full h-auto py-20">
      <div className="w-full max-w-[75rem] mx-auto grid grid-cols-2 gap-x-10 gap-y-10 md:gap-y-12 ">
        <div className="relative col-span-2 w-full flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">
            <span className="text-sky-500">Contact</span> Us
          </h1>
          <p className="w-[45%] text-center text-black/60 tracking-wide font-medium">
            Have questions, suggestions, or need support? We’re here to help you
            every step of the way.
          </p>
          <svg
            className="absolute right-[5%] sm:right-[13%] md:right-[20%] top-1/4"
            xmlns="http://www.w3.org/2000/svg"
            width="91"
            height="101"
            viewBox="0 0 91 101"
            fill="none"
          >
            <path
              d="M2.35463 16.629C5.55359 13.1291 9.33963 10.0151 13.7827 7.44746C54.7865 -16.2488 68.8389 58.4003 69.644 98.4142M69.644 98.4142C66.9207 92.6365 56.5473 78.9477 45.6049 72.5961M69.644 98.4142C71.8258 88.6501 76.849 68.4915 88.253 68.1509"
              stroke="#337DE2"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <div className=" col-span-2 w-full relative grid md:grid-cols-2 p-2">
          <div className="relative w-full p-10 bg-[#f3f7fe] flex flex-col gap-5 overflow-hidden rounded-lg">
            <div className=" text-3xl flex items-center gap-2 font-bold">
              <span>Let’s Connect</span>
            </div>
            <p className="w-[80%] text-black/50 font-medium tracking-wide">
              Submit the form. Our team will get back to you within 24 hours.
            </p>
            <button className="flex items-center gap-4 font-medium">
              <span className="p-2 rounded-full bg-sky-500 text-white">
                <IoIosCall className="text-xl" />
              </span>
              +91 9823874343
            </button>
            <button className="flex items-center gap-4 font-medium">
              <span className="p-2 rounded-full bg-sky-500 text-white">
                <GoMail className="text-xl" />
              </span>
              abc@gmail.com
            </button>
            <button className="w-[80%] text-left flex items-start gap-4 font-medium">
              <span className="p-2 rounded-full bg-sky-500 text-white">
                <MdLocationOn className="text-xl" />
              </span>
              Second Floor, Shri Mahalaxmi Villa Colony, VT Road Ext, Patrakar
              Colony Rd, Mansarovar, Jaipur, Rajasthan 302020
            </button>
            <img
              src={RightImage}
              alt=""
              className="absolute w-[22rem] -right-12 bottom-0"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-between gap-5 p-5"
          >
            <div className="w-full flex flex-col justify-start gap-7">
              <Input
                label="Enter your full name"
                type="text"
                placeholder="i.e Bhawani Shankar"
                {...register("fullName", {
                  required: "This field is required",
                })}
                error={errors.fullName}
              />
              <Input
                label="Enter your contact number"
                type="number"
                placeholder="i.e 987xxxxx25"
                {...register("phoneNumber", {
                  required: "This field is required",
                })}
                error={errors.phoneNumber}
              />
              <Input
                label="Enter your email"
                type="email"
                placeholder="i.e deepak@example.com"
                {...register("email", { required: "This field is required" })}
                error={errors.email}
              />
              <Input
                label="Located City"
                placeholder="i.e Jaipur"
                {...register("city", { required: "This field is required" })}
                error={errors.city}
              />

              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor={`message`}
                  className="font-medium text-sm tracking-wide"
                >
                  {"Your message"}
                </label>
                <div>
                  <textarea
                    rows={4}
                    placeholder={"type your message here"}
                    {...register("message", {
                      required: "please write your message",
                    })}
                    error={errors.message}
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
            <button type='submit' className="w-full py-3 bg-sky-500 text-white font-medium rounded-md cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full bg-[#f3f7fe] mt-16 -mb-20">
        <div className="w-full max-w-[75rem] h-auto mx-auto py-10 flex flex-col items-center gap-4 ">
          <span className="text-xl p-3 rounded-full bg-sky-500 text-white">
            <FaGlobe />
          </span>
          <h1 className="font-bold">Support</h1>
          <p className="text-sm text-black/50 font-medium">
            Find the answers you need and access helpful resources.
          </p>
          <button
            onClick={() => navigate("/support")}
            className="font-medium cursor-pointer text-sm text-sky-500"
          >
            Help & Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
