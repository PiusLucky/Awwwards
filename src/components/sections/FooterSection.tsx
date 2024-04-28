import { CalendarIcon } from "lucide-react";
import React from "react";

function FooterSection() {
  const data = {
    c1: ["Websites", "Collections"],
    c2: ["Academy", "Jobs"],
    c3: ["Directory", "Conferences"],
    c4: ["FAQs", "About Us", "Contact us"],
    left: ["Cookies Policy", "Lega Terms", "Privacy Policy"],
    right: [
      "Instagram",
      "LinkedIn",
      "Twitter",
      "Facebook",
      "Youtube",
      "TikTok",
      "Pinterest",
    ],
  };

  return (
    <section>
      <div className="mb-[60px]">
        <img src="/images/logo.svg" alt="footer logo" />
      </div>

      <div className="flex flex-col xl:flex-row flex-wrap gap-8 justify-between">
        <div>
          {data.c1.map((item, index) => (
            <CustomLink item={item} key={index} />
          ))}
        </div>
        <div>
          {data.c2.map((item, index) => (
            <CustomLink item={item} key={index} />
          ))}
        </div>
        <div>
          {data.c3.map((item, index) => (
            <CustomLink item={item} key={index} />
          ))}
        </div>
        <div>
          {data.c4.map((item, index) => (
            <CustomLink item={item} key={index} />
          ))}
        </div>

        <div className="bg-[#E9E9E9] max-w-[300px] p-4 md:p-[26px] flex gap-2 items-center rounded-[8px]">
          <p className="text-14">Next Conference</p>
          <CalendarIcon />
          <div className="">
            <p className="text-end text-customDark font-bold text-14">
              Amsterdam
            </p>
            <div className="">
              <img
                src="/images/nm_underline.png"
                alt="stylish underline"
                className="w-[90px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-8 md:pt-[75px] md:pb-[45px]">
          <img src="/images/dotted_line.png" alt="dotted line" />
        </div>

        <div className="flex flex-col xl:flex-row gap-8 justify-between w-full md:pt-[45px] pb-[120px]">
          <div className="flex gap-8 flex-col md:flex-row">
            {data.left.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <span className="font-bold">Connect: </span>
            <div className="flex gap-8 flex-col md:flex-row">
              {data.right.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomLink({ item }: { item: string }) {
  return <p className="font-bold text-14 mb-4">{item}</p>;
}

export default FooterSection;
