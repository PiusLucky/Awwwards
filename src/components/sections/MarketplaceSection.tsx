import React from "react";
import MarketplaceCard from "../cards/MarketplaceCard";
import { ArrowRight } from "lucide-react";

function MarketplaceSection() {
  const data = [
    {
      image: "/images/m_1.png",
      title: "Digital Product",
      subtitle: "Liquid Symphony (abstract liquid wallpaper pack)",
      author: "A.Ignatov",
      amount: "19",
    },
    {
      image: "/images/m_2.png",
      title: "Digital Product",
      subtitle: "Brainwave AI UI Kit",
      author: "ui8",
      amount: "98",
    },
    {
      image: "/images/m_3.png",
      title: "Digital Product",
      subtitle: "Infinite - SaaS and Startups Framer Template",
      author: "Enhanced",
      amount: "59",
    },
    {
      image: "/images/m_4.png",
      title: "Digital Product",
      subtitle: "Østen Wilde - Portfolio Webflow Template",
      author: "Ethan Parry",
      amount: "49",
    },
  ];
  return (
    <section>
      <div>
        <p className="text-14 text-customDark">Market</p>
        <p className="leading-8 md:leading-tight text-[2rem] md:text-[50.97px] font-bold text-customDark">
          A curated marketplace
          <br /> for digital & physical products
        </p>

        <div className="mt-16 md:mt-[102px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {data.map((course, index) => (
            <MarketplaceCard {...course} key={index} />
          ))}
        </div>

        <div className="flex items-center gap-[19px] justify-center mt-[80px]">
          <p>Browse specially curated products</p>
          <ArrowRight />
          <div>
            <p className="text-[18.28px] font-bold mb-2">View Market</p>
            <div>
              <img src="/images/nm_underline.png" alt="stylish underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketplaceSection;
