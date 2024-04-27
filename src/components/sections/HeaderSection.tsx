"use client";

import React from "react";
import Marquee from "react-fast-marquee";

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
    <div>
      <p className="md:pt-16 text-center text-[3rem] md:text-[6.2rem] font-bold text-customDark">
        Awwwards
      </p>
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

export default HeaderSection;
