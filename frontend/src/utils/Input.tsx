import React from "react";

const Input = ({ register, name, ...rest }: any) => {
  return (
    <input
      {...rest}
      {...register(name)}
      className="p-1 pl-2 bg-transparent border-[1px] border-gray-500 text-lg rounded-lg outline-none"
    />
  );
};

export default Input;
