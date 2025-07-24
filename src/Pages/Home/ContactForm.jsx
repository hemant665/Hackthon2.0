import { useForm } from "react-hook-form";
import Input from "../../Components/Input";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  // Reusable error message component
  const ErrorMessage = ({ error }) => (
    <p className="text-red-500 text-xs mt-1">
      {error?.message || "This field is required"}
    </p>
  );

  return (
    <div className="flex items-center justify-center p-6  min-h-[30em]">
      <main className="max-w-[75rem] w-full bg-gradient-to-r from-[#f7fbff] to-[#e9f0f9] bg-opacity-30 backdrop-blur-md rounded-md p-8 md:p-12  grid md:grid-cols-2 md:justify-end md:items-end gap-10">
        <section className="md:flex-1 max-w-xl ">
          <h1 className="text-[38px] md:text-[62px] font-extrabold text-[#2a2a52] leading-tight mb-4">
            Let's Get In<br />Touch!
          </h1>
          <p className="text-[#6b7280] text-sm md:text-xl mb-10 max-w-md">
            Our co-founders Tuomo Riekki and Kristo Ovaska are serial entrepreneurs who, back in 2013, noticed how advanced marketer
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-[#6b7280] text-sm md:text-xl mb-1">
                First name*
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", { 
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters required"
                  }
                })}
                className={`w-full border-b ${errors.firstName ? "border-red-500" : "border-[#6b7280]"} text-[#2a2a52] font-semibold text-sm focus:outline-none focus:border-[#2a2a52] bg-transparent`}
              />
              {errors.firstName && <ErrorMessage error={errors.firstName} />}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-[#6b7280] text-sm md:text-xl mb-1">
                Last name*
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName", { 
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters required"
                  }
                })}
                className={`w-full border-b ${errors.lastName ? "border-red-500" : "border-[#6b7280]"} text-[#2a2a52] font-semibold text-sm focus:outline-none focus:border-[#2a2a52] bg-transparent`}
              />
              {errors.lastName && <ErrorMessage error={errors.lastName} />}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#6b7280] text-sm md:text-xl mb-1">
                Email*
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={`w-full border-b ${errors.email ? "border-red-500" : "border-[#6b7280]"} text-[#2a2a52] font-semibold text-sm focus:outline-none focus:border-[#2a2a52] bg-transparent`}
              />
              {errors.email && <ErrorMessage error={errors.email} />}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-[#6b7280] text-sm md:text-xl mb-1">
                Phone
              </label>
              <input
                id="phone"
                input="number"
                type="number"
                {...register("phone", {
                    required: "Phone is required",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                    message: "Invalid phone number"
                  }
                })}
                className={`w-full border-b ${errors.phone ? "border-red-500" : "border-[#6b7280]"} text-[#2a2a52] font-semibold text-sm focus:outline-none focus:border-[#2a2a52] bg-transparent`}
              />
              {errors.phone && <ErrorMessage error={errors.phone} />}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-[#6b7280] md:text-xl text-sm mb-1">
                Message*
              </label>
              <textarea
                id="message"
                rows={3}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required"
                  }
                })}
                className={`w-full border-b ${errors.message ? "border-red-500" : "border-[#6b7280]"} text-[#2a2a52] font-semibold text-sm focus:outline-none focus:border-[#2a2a52] bg-transparent`}
              />
              {errors.message && <ErrorMessage error={errors.message} />}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2a2a52] md:text-xl text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </section>

        {/* Contact Info Section */}
        <section className="w-full flex flex-col sm:flex-row md:flex-col md:justify-end gap-8 text-[#4b4b6b] text-sm md:text-base md:items-end">
          <div>
            <p className="mb-1">Address</p>
            <p className="font-extrabold text-[#2a2a52] text-base md:text-xl leading-snug">
             Ajitgarh <br /> Jhunjhunu Rajasthan
            </p>
          </div>
          <div>
            <p className="mb-1">Support</p>
            <p className="font-extrabold text-[#2a2a52] text-base md:text-xl leading-snug">
              +91 7597683262<br />
              <a href="mailto:sinfo@mymt.com" className="font-extrabold text-[#2a2a52] hover:underline">
                info@digiischool.com
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactForm;