import React from "react";
import ShareYourWorkCard from "../cards/ShareYourWorkCard";

function ShareWorkSection() {
  const data = [
    {
      title: "Share you work",
      subtitle: "Submit your website for visibility and recognition",
      buttonText: "Submit Website",
      backgroundType: 1,
    },
    {
      title: "Be a member",
      subtitle: "Get access to special pro features",
      buttonText: "Be Pro",
      backgroundType: 2,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
      {data.map((item, index) => (
        <ShareYourWorkCard {...item} key={index} />
      ))}
    </div>
  );
}

export default ShareWorkSection;
