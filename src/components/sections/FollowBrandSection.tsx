import React from "react";
import FollowBrandCard from "../cards/FollowBrandCard";
import { Separator } from "../ui/separator";

function FollowBrandSection() {
  const newsData = [
    {
      title: "Element of the Day",
      subtitle: "Longpress feature",
      avatar: "/images/fb_1.png",
      tag: "fresh",
    },
    {
      title: "News - December 20, 2023",
      subtitle: "28K Making Carlos Alcaraz",
      avatar: "/images/fb_3.png",
    },
    {
      title: "News - December 15, 2023",
      subtitle: "JOIN THE AWWWARDS JURY 2024",
      avatar: "/images/fb_5.png",
    },
    {
      title: "News - December 13, 2023",
      subtitle: "Somefolk® Digital Goods",
      avatar: "/images/fb_7.png",
    },
  ];

  const newsData2 = [
    {
      title: "Agency",
      subtitle: "Achitects",
      avatar: "/images/fb_2.png",
      tag: "INTERNATIONAL",
    },
    {
      title: "Studio",
      subtitle: "OHMY",
      avatar: "/images/fb_4.png",
      tag: "INTERNATIONAL",
    },
    {
      title: "Freelance - Unites States",
      subtitle: "Jose Hurtado",
      avatar: "/images/fb_6.png",
    },
    {
      title: "Studio - Unites States",
      subtitle: "Claudio Guglieri",
      avatar: "/images/fb_8.png",
    },
  ];
  return (
    <section className="bg-inherit">
      <div>
        <p className="text-[14.25px] text-customDark mb-[17px]">
          {" "}
          News and Updates
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end">
          <p className="text-[2rem] md:text-[51.08px] text-customDark font-bold">
            Follow what&apos;s brand new in digital design.
          </p>
          <p className="text-[14.25px] text-customDark">
            Don&apos;t miss the <b>latest</b> happenings on <b>awwwards.</b>
          </p>
        </div>
      </div>

      <div className="flex gap-[58px] flex-col md:flex-row mt-8 md:mt-[105px] justify-between">
        <section className="flex-grow">
          <p className="font-bold text-14 mb-[33px]"> w.news</p>
          <div className="flex flex-col gap-1">
            {newsData.map((data, index) => (
              <FollowBrandCard {...data} key={index} />
            ))}
          </div>
        </section>

        <section className="flex-grow">
          <p className="font-bold text-14 mb-[33px]">
            {" "}
            w.creators - close to you
          </p>
          <div className="flex flex-col gap-1">
            {newsData2.map((data, index) => (
              <FollowBrandCard {...data} key={index} />
            ))}
          </div>
        </section>

        <section>
          <p className="font-bold text-14 mb-[33px]">Featured</p>
          <Separator className="border border-[#E9E9E9]" />

          <div className="mt-[20px]">
            <img src="/images/fb_large.png" alt="brand ad" />
          </div>
          <p className="text-14 text-customDark mt-[40px]">Coming Soon!</p>
          <p className="text-18 font-bold text-customDark">
            6 new honors to celebrate Web Design Excellence.
          </p>
        </section>
      </div>
    </section>
  );
}

export default FollowBrandSection;
