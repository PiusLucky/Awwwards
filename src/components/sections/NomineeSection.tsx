import React from "react";
import NomineeCard from "../cards/NomineeCard";
import { ArrowRight } from "lucide-react";

function NomineeSection() {
  const data = [
    {
      banner: "/images/nm_1.png",
      companyName: "RRE",
      avatar: "/images/nm_a_1.png",
      username: "Studio Freight",
    },
    {
      banner: "/images/nm_2.png",
      companyName: "Memphis Milano",
      avatar: "/images/nm_a_2.png",
      username: "Nicholas Ruggeri",
    },
    {
      banner: "/images/nm_3.png",
      companyName: "kidSuper World",
      avatar: "/images/nm_a_3.png",
      username: "basement studio",
    },
  ];
  return (
    <section>
      <div>
        <p className="text-14 text-customDark text-center">Latest</p>

        <div className="text-center">
          <div className="relative inline-block text-[4rem] lg:text-[164px] font-bold text-customDark ">
            NOMINEES
            <div className="hidden lg:block absolute -right-10 bottom-4">
              <img src="/images/yellow_rectangle.png" alt="yellow rectangle" />
            </div>
          </div>
        </div>

        <p className="text-center">Vote for the latest websites on awwwards</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between mt-8 md:mt-[100px]">
        {data.map((nominee, index) => (
          <NomineeCard {...nominee} key={index} />
        ))}
      </div>

      <div className="flex justify-end mt-[50px] mb-[80px]">
        <img src="/images/chevron_right_button.png" alt="chevron right" />
      </div>

      <div className="flex items-center gap-[19px] justify-center">
        <p>Check out all submitted websites</p>
        <ArrowRight />
        <div>
          <p className="text-[18.28px] font-bold mb-2">View Nominees</p>
          <div>
            <img src="/images/nm_underline.png" alt="stylish underline" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NomineeSection;
