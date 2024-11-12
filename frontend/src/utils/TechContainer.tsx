import React from "react";

const TechContainer = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="p-2 border w-full rounded-lg">
      <h1 className="font-semibold text-xl pb-5 text-center capitalize">{label}</h1>
      <div className="flex justify-around items-start gap-10 flex-wrap">{children}</div>
    </div>
  );
};

export default TechContainer;
