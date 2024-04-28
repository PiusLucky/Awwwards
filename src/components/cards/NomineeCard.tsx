import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IProps {
  banner: string;
  companyName: string;
  avatar: string;
  username: string;
}

function NomineeCard({ banner, companyName, avatar, username }: IProps) {
  return (
    <div>
      <div className="mb-[28px]">
        <img
          src={banner}
          alt="nominee company banner"
          className="rounded-[1rem]"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-2">
        <b className="font-bold text-[22.31px]">{companyName}&nbsp;</b>
        <span>by</span>
        <div>
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-[21.94px] font-bold mb-2">{username}</p>
            <div>
              <img src="/images/nm_underline.png" alt="stylish underline" />
            </div>
          </div>
          <div>PRO</div>
        </div>
      </div>
    </div>
  );
}

export default NomineeCard;
