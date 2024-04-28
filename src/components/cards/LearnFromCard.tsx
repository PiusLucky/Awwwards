import React from "react";
import { Separator } from "../ui/separator";
import { ArrowRight } from "lucide-react";

interface IProps {
  image: string;
  title: string;
  subtitle: string;
  author: string;
  redValue: string;
  redTopValue: string;
  blackValue: string;
  blackTopValue: string;
  interestRate: string;
  totalStudents: string;
  likes: string;
  score: string;
  hasBadge?: boolean;
}

function LearnFromCard({
  image,
  title,
  subtitle,
  author,
  redValue,
  redTopValue,
  blackValue,
  blackTopValue,
  interestRate,
  totalStudents,
  likes,
  score,
  hasBadge = false,
}: IProps) {
  return (
    <div className="bg-white">
      <div className="relative">
        <img src={image} alt="course banner" className="rounded-t-[1rem]" />
        <div className="absolute top-[35%] left-[42%] ">
          <img
            src="/images/lf_play_icon.png"
            alt="play button"
            className="rounded-[1rem]"
          />
        </div>

        {hasBadge && (
          <div className="hidden 3xl:block absolute -top-[3.5rem] left-[89px]">
            <img src="/images/lf_badge.png" alt="badge" />
          </div>
        )}
      </div>
      <div className="p-[30px] mb-[30px]">
        <p className="text-[21.19px] font-bold text-customDark">{title}</p>
        <p className="text-[13.48px] mt-[8px] ">{subtitle}</p>
      </div>

      <Separator className="border border-[#E9E9E9]" />
      <div className="py-[35px] px-[30px] flex justify-between flex-col gap-4 md:flex-row">
        <div>
          By <span className="font-bold">{author}</span>
        </div>
        <div className="flex gap-3">
          <div className="text-customRed flex gap-3">
            <p className="text-[27.38px]"> {redValue}</p>
            <p>&apos;{redTopValue}</p>
          </div>
          <div className="text-customDark flex gap-2">
            <p className="text-[27.38px]  font-bold"> {blackValue}</p>
            <div className="">
              <p className="font-bold">
                &apos;{blackTopValue}
                <span className="font-bold  text-[15px] text-2xl ml-2">$</span>
              </p>
              <div className="flex gap-2">
                <p>{interestRate}</p> Dto.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="border border-[#E9E9E9]" />
      <div className="py-[35px] px-[30px] flex justify-between flex-col gap-4 md:flex-row">
        <div>
          <p className="font-bold">Students</p>
          <p>{totalStudents}</p>
        </div>
        <div>
          <p className="font-bold">Likes</p>
          <p>{likes}</p>
        </div>
        <div>
          <div className="flex gap-2">
            <p className="font-bold">Score</p>
            <p>{score}/5</p>
          </div>
          <div className="mt-[12px]">
            <img src="/images/yellow_progress.png" alt="progress bar" />
          </div>
        </div>
        <div>
          <ArrowRight color="#222222" />
        </div>
      </div>
    </div>
  );
}

export default LearnFromCard;
