import React from "react";
import CreatorCard1 from "../cards/CreatorCard1";
import CreatorCard2 from "../cards/CreatorCard2";
import { ArrowRight } from "lucide-react";

function CreatorSection() {
  const data = [
    {
      avatar: "/images/c_a_1.png",
      imageArr: ["/images/c_1.png", "/images/c_2.png", "/images/c_3.png"],
      title: "Crafted",
      day: "09",
      website: "craftedny.com",
      awards: "3",
    },
    {
      avatar: "/images/c_a_2.png",
      imageArr: ["/images/c_2.png", "/images/c_1.png", "/images/c_3.png"],
      title: "Adoratorio Studio",
      day: "59",
      website: "adoratorio.com",
      awards: "54",
    },
    {
      avatar: "/images/c_a_2.png",
      imageArr: ["/images/c_3.png", "/images/c_2.png", "/images/c_1.png"],
      title: "Immersive Garden",
      day: "76",
      website: "immersive-g.com",
      awards: "74",
    },
  ];

  const card2Data = {
    name: [
      {
        title: "",
        avatar: "/images/cl_1.png",
        description: "SPECIAL OFFER ",
        showTitleOnly: false,
        showView: false,
      },
      {
        title: "",
        avatar: "/images/cl_2.png",
        description: "Cuberto",
        showTitleOnly: false,
        showView: false,
      },
      {
        title: "",
        avatar: "/images/cl_3.png",
        description: "Isadora Digital Agency ",
        showTitleOnly: false,
        showView: false,
      },
      {
        title: "",
        avatar: "/images/cl_4.png",
        description: "Outside Digital",
        showTitleOnly: false,
        showView: false,
      },
    ],
    profile: [
      {
        title: "Studio",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
      {
        title: "Agency",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
      {
        title: "Agency",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
      {
        title: "Agency",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
    ],
    award: [
      {
        title: "24",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
      {
        title: "27",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
      {
        title: "12",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
      {
        title: "4",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: false,
      },
    ],
    category: [
      {
        title: "Web Design , Web Development …",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: true,
      },
      {
        title: "Web Design , Web Development …",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: true,
      },
      {
        title: "Web Design , Web Development …",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: true,
      },
      {
        title: "Web Design , Web Development …",
        avatar: "",
        description: "",
        showTitleOnly: true,
        showView: true,
      },
    ],
  };
  return (
    <section>
      {" "}
      <div>
        <p className="text-14 text-customDark text-center">Directory</p>

        <div className="text-center">
          <div className="relative inline-block text-[4rem] 3xl:text-[164px] font-bold text-customDark ">
            W.CREATORS
            <div className="hidden 3xl:block absolute -right-16 bottom-0">
              <img src="/images/star.png" alt="star" />
            </div>
          </div>
        </div>

        <p className="text-center">Active creators in your country.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 md:mt-[100px]">
        {data.map((creator, index) => (
          <CreatorCard1 {...creator} key={index} />
        ))}
      </div>
      <section className="mt-[80px] flex justify-between flex-col gap-8 md:flex-row">
        <div>
          <p className="text-14 mb-[50px]">Name</p>
          <div className="flex flex-col gap-16">
            {card2Data.name.map((item, index) => (
              <CreatorCard2 {...item} key={index} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-14 mb-[50px]">Profile</p>
          <div className="flex flex-col gap-16">
            {card2Data.profile.map((item, index) => (
              <CreatorCard2 {...item} key={index} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-14 mb-[50px]">Awards</p>
          <div className="flex flex-col gap-16">
            {card2Data.award.map((item, index) => (
              <CreatorCard2 {...item} key={index} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-14 mb-[50px]">Categories</p>
          <div className="flex flex-col gap-16">
            {card2Data.category.map((item, index) => (
              <CreatorCard2 {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <div className="flex items-center gap-[19px] justify-center mt-[80px]">
        <p>
          Connect with over <span className="font-bold">5,185</span> Agencies
          and Professionals
        </p>
        <ArrowRight />
        <div>
          <p className="text-[18.28px] font-bold mb-2">View Directory</p>
          <div>
            <img src="/images/nm_underline.png" alt="stylish underline" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatorSection;
