import React from "react";
import { Separator } from "../ui/separator";
import { ArrowRight } from "lucide-react";

interface IProps {
  image: string;
  title: string;
  subtitle: string;
  author: string;
  amount: string;
  hasBadge?: boolean;
}

function MarketplaceCard({
  image,
  title,
  subtitle,
  author,
  amount,
  hasBadge = false,
}: IProps) {
  return (
    <div className="bg-white">
      <div className="relative">
        <img src={image} alt="course banner" className="rounded-t-[1rem]" />
        <div className="absolute top-[35%] left-[42%] ">
          <img
            src="/images/lf_play_icon.png"
            alt="play button"
            className="rounded-[1rem]"
          />
        </div>

        {hasBadge && (
          <div className="hidden 3xl:block absolute -top-[3.5rem] left-[89px]">
            <img src="/images/lf_badge.png" alt="badge" />
          </div>
        )}
      </div>
      <div className="p-[30px] mb-[30px]">
        <p className="text-[21.19px] font-bold text-customDark">{title}</p>
        <p className="text-[13.48px] mt-[8px] ">{subtitle}</p>
      </div>

      <Separator className="border border-[#E9E9E9]" />
      <div className="py-[35px] px-[30px] flex justify-between flex-col gap-4 md:flex-row">
        <div>
          By <span className="font-bold">{author}</span>
        </div>
        <div className="flex gap-3">
          <p className="font-bold">from</p>
          <p className="font-bold text-[26.25px]">{amount}</p>
          <p>USD</p>
        </div>
      </div>
      <Separator className="border border-[#E9E9E9]" />
      <div className="py-[35px] px-[30px] flex justify-between flex-col gap-4 md:flex-row">
        <div>
          <p className="font-bold">View Product</p>
        </div>
        <div>
          <ArrowRight color="#222222" />
        </div>
      </div>
    </div>
  );
}

export default MarketplaceCard;
