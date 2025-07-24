import React from "react";

const Input = (props) => {
  const { 
      label,
      type,
      placeholder,
      error,
      ...rest
      } = props;

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={label} className="font-medium text-sm tracking-wide">
        {label}
      </label>
      <input
      id={label}
        type={type}
        placeholder={placeholder}
        required={true}
      //   min={type === 'number' ? 10 : undefined}
      //   max={type == 'number' ? 14 : undefined}
        {...rest}
        className={`w-full outline-none border-2 border-gray-300 rounded-lg p-3 focus:border-gray-400 ${error ? "border-red-500" : ""}`}     
      />
      {error && (
            <p className="text-xs text-red-600 font-medium">
              {error.message}
            </p>
          )}
    </div>
  );
};

export default Input;
