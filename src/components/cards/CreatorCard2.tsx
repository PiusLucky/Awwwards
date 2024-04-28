import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MainButton from "../common/MainButton";

interface IProps {
  title: string;
  avatar?: string;
  description?: string;
  showTitleOnly?: boolean;
  showView?: boolean;
}

function CreatorCard2({
  title,
  avatar,
  description,
  showTitleOnly,
  showView,
}: IProps) {
  return showTitleOnly ? (
    <div className="flex justify-between gap-8">
      <div className="text-[18.28px]">{title}</div>
      {showView && (
        <MainButton
          text="View"
          classes="bg-transparent shadow-none border border-customDark text-black rounded-[.5rem] w-[75px] h-[40px]"
        />
      )}
    </div>
  ) : (
    <div className="flex gap-8 items-center">
      <Avatar>
        <AvatarImage src={avatar} alt="avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <div className="flex gap-2">
          <p className="font-bold text-[19.06px]">{description}</p> INT
        </div>
        <div>
          <img src="/images/nm_underline.png" alt="stylish underline" />
        </div>
      </div>
    </div>
  );
}

export default CreatorCard2;
