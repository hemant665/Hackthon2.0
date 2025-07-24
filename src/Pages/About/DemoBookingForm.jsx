import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import bg from "../../assets/left-square.png"
const DemoBooking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Demo requested successfully!');
  };
  

  return (
    <div className="bg-white text-gray-800 font-inter px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      {/* Investors */}
      <div>
        <h2 className="text-blue-600 font-semibold text-lg mb-2">Investors</h2>
        <hr className="border-gray-300 mb-6" />
        <div className="flex flex-wrap items-center gap-10">
          <img src="https://storage.googleapis.com/a1aa/image/7598b0ec-2250-405f-12c8-ffd11452e183.jpg" alt="IIM Udaipur" className="h-10 w-auto" />
          <img src="https://storage.googleapis.com/a1aa/image/3d4993c9-94e8-4c19-3cf2-c71c54493b44.jpg" alt="Microsoft" className="h-10 w-auto" />
          <img src="https://storage.googleapis.com/a1aa/image/07c404d4-434c-431e-7f2b-eac85a4b6570.jpg" alt="iSTART" className="h-10 w-auto" />
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-10 flex flex-col md:flex-row md:space-x-10">
        {/* Info Box */}
        <div className="bg-blue-50 rounded-lg p-8 md:w-1/2 relative relative overflow-hidden min-w-[320px]">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Book a <span className="text-blue-600">Demo</span>
          </h3>
          <p className="text-gray-500 mb-8 max-w-md">
            Ready to experience how Studybase can transform your institution? Take
            the first step by booking a demo session with us.
          </p>
          <div className="space-y-5">
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="flex space-x-2">
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <div className="bg-blue-600 text-white p-2 rounded-full">
                  <FaWhatsapp className="text-xs" />
                </div>
              </div>
              <span className="text-sm font-normal">+91 926 143 1432</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <FaEnvelope className="text-xs" />
              </div>
              <span className="text-sm font-normal">connect@studybase.in</span>
            </div>
          </div>
          {/* Decorative */}
        <img src={bg} className='absolute  right-0 rotate-180 -top-10 ' alt="" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 md:mt-0 md:w-1/2 space-y-5">
          {[
            { label: 'Enter your full name', name: 'fullName', placeholder: 'i.e. Lokesh Singh' },
            { label: 'Enter your institution name', name: 'institutionName', placeholder: 'i.e. Saraswati Senior Secondary School' },
            { label: 'Enter your contact number', name: 'contactNumber', placeholder: 'i.e. +91 1234567890', type: 'tel' },
            { label: 'Enter your email', name: 'email', placeholder: 'i.e. xyz@domain.com', type: 'email' },
          ].map(({ label, name, placeholder, type = 'text' }) => (
            <div key={name}>
              <label className="block text-xs font-semibold text-gray-900 mb-1" htmlFor={name}>{label}</label>
              <input
                id={name}
                {...register(name, { required: `${label} is required.` })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none"
                type={type}
                placeholder={placeholder}
              />
              {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>}
            </div>
          ))}

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-xs font-semibold text-gray-900 mb-1" htmlFor="role">Your role in the organization?</label>
              <input
                id="role"
                {...register('role', { required: 'Role is required.' })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none"
                placeholder="i.e. Principal"
              />
              {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
            </div>

            <div className="w-1/2">
              <label className="block text-xs font-semibold text-gray-900 mb-1" htmlFor="city">Located City</label>
              <input
                id="city"
                {...register('city', { required: 'City is required.' })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none"
                placeholder="Jaipur"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-md py-3 text-sm hover:bg-blue-700 transition-colors"
          >
            Request a Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoBooking;
