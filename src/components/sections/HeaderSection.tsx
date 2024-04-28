"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { FollowerPointerCard } from "../ui/following-pointer";
import Image from "next/image";

function HeaderSection() {
  const data = [
    "Mythic Codex — James Onterio - 7.26 —",
    "Mythic Codex — Paul Rodrick - 7.26 —",
    "Mythic Codex — Smith Rawson - 7.26 —",
    "Mythic Codex — Jake Paul - 7.26 —",
    "Mythic Codex — Mike Tyson - 7.26 —",
    "Mythic Codex — Ryan Garcia - 7.26 —",
    "Mythic Codex — Khabib N. - 7.26 —",
    "Mythic Codex — Justin P. - 7.26 —",
  ];
  return (
    <div className="">
      <div className="flex justify-center">
        <FollowerPointerCard
          title={
            <TitleComponent
              title={"Lucky Pius"}
              avatar={"https://github.com/shadcn.png"}
            />
          }
          className="inline-flex"
        >
          <p className="md:pt-16 text-[3rem] md:text-[6.2rem] font-bold text-customDark">
            Awwwards
          </p>
        </FollowerPointerCard>
      </div>

      <div className="mb-[66px]">
        <Marquee pauseOnHover>
          {data.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

export default HeaderSection;
