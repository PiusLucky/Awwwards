import React from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  title: string;
  subtitle: string;
  avatar: string;
  tag?: string;
}

function FollowBrandCard({ title, subtitle, avatar, tag }: IProps) {
  return (
    <div>
      <Separator className="border border-[#E9E9E9]" />
      <div className="my-[24px] flex px-4 flex-row gap-4 justify-between">
        <div className="flex gap-4 items-center ">
          <div>
            <Avatar className="w-[72px] h-[72px]">
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="text-customDark text-[14px]">{title}</p>
            <p className="text-customDark font-bold text-[18.13px] mt-2">
              {subtitle}
            </p>
          </div>
        </div>
        {tag && (
          <div className="bg-customDark text-white px-[4px] py-[6px] rounded-[4px] font-medium uppercase h-[27px] text-[10.88px]">
            {tag}
          </div>
        )}
      </div>
    </div>
  );
}

export default FollowBrandCard;
