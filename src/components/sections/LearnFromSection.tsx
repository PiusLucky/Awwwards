import React from "react";
import LearnFromCard from "../cards/LearnFromCard";

function LearnFromSection() {
  const data = [
    {
      image: "/images/lf_1.png",
      title: "Design Systems for Websites using Figma",
      subtitle:
        "Learn how to build design systems for visually appealing websites using Figma...",
      author: "Filip Felbar",
      redValue: "59",
      redTopValue: "99",
      blackValue: "9",
      blackTopValue: "99",
      interestRate: "84%",
      totalStudents: "2.4k",
      likes: "31",
      score: "4.8",
    },
    {
      image: "/images/lf_2.png",
      title: "Designing an E-commerce Brand Experience",
      subtitle:
        "Learn how to create innovative and functional online shopping experiences by...",
      author: "Adoratorio Studio",
      redValue: "59",
      redTopValue: "99",
      blackValue: "9",
      blackTopValue: "99",
      interestRate: "84%",
      totalStudents: "2.3k",
      likes: "82",
      score: "4.8",
    },
    {
      image: "/images/lf_3.png",
      title: "Website Creation with Webflow: Build a Site without Code",
      subtitle:
        "Learn the basics of no-code development and build a fully-functioning website...",
      author: "Jan Losert",
      redValue: "59",
      redTopValue: "99",
      blackValue: "9",
      blackTopValue: "99",
      interestRate: "84%",
      totalStudents: "3.7k",
      likes: "96",
      score: "4.7",
    },
    {
      image: "/images/lf_4.png",
      title: "Introduction to UX Design",
      subtitle:
        "Learn how to create digital experiences that resonate with your users",
      author: "Ethan Parry",
      redValue: "59",
      redTopValue: "99",
      blackValue: "9",
      blackTopValue: "99",
      interestRate: "84%",
      totalStudents: "24.3k",
      likes: "753",
      score: "4.9",
      hasBadge: true,
    },
  ];
  return (
    <section>
      <div>
        <p className="text-14 text-customDark">Academy</p>
        <p className="leading-8 md:leading-tight text-[2rem] md:text-[50.97px] font-bold text-customDark">
          Learn from the <br /> best instructors.
        </p>

        <div className="mt-16 md:mt-[102px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {data.map((course, index) => (
            <LearnFromCard {...course} key={index} />
          ))}
        </div>

        <div className="flex items-center gap-[19px] justify-center mt-[80px]">
          <p>
            Choose from over <span className="font-bold">hundreds</span> of
            courses
          </p>
          <div>
            <p className="text-[18.28px] font-bold mb-2">View Academy</p>
            <div>
              <img src="/images/nm_underline.png" alt="stylish underline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearnFromSection;
