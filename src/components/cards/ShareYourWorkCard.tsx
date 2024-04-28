import React from "react";
import MainButton from "../common/MainButton";

interface IProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundType: number;
}

function ShareYourWorkCard({
  title,
  subtitle,
  buttonText,
  backgroundType,
}: IProps) {
  return (
    <div
      className={`${
        backgroundType === 1 ? "bg-sw-1" : "bg-sw-2"
      } rounded-[16px] p-4 md:p-[50px] flex flex-col gap-8`}
    >
      <p className="text-14 text-white">{title}</p>
      <p className="text-[51.3px] text-white leading-tight">{subtitle}</p>
      <div>
        <MainButton
          text={buttonText}
          classes="border w-[200px] h-[70px] border-white text-white bg-transparent shadow-none"
        />
      </div>

      <div className="">
        <p className="text-end text-white">Got questions? Read our FAQs</p>
        <div className="flex justify-end">
          <img src="/images/underline.png" alt="stylish underline" />
        </div>
      </div>
    </div>
  );
}

export default ShareYourWorkCard;
