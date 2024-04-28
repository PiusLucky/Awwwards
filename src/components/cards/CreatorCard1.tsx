"use client";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

interface IProps {
  avatar: string;
  imageArr: string[];
  title: string;
  day: string;
  website: string;
  awards: string;
}

function CreatorCard1({
  avatar,
  imageArr,
  title,
  day,
  website,
  awards,
}: IProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-customDark p-4 md:p-[57px] rounded-[8px]">
      <div>
        <div className="flex justify-between gap-4">
          <div>
            <Avatar>
              <AvatarImage src={avatar} alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Carousel
              setApi={setApi}
              className="w-full max-w-xs"
              opts={{
                loop: true,
              }}
              plugins={[plugin.current]}
            >
              <CarouselContent>
                {imageArr.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt="sliding image"
                      className="rounded-l-[1rem]"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="flex gap-[12px] mt-[36px] justify-end">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  className={`w-3 h-3 rounded-full ${
                    current === index + 1 ? "bg-white" : "bg-white/20"
                  }`}
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[30px] mb-[30px] flex justify-between flex-col xl:flex-row gap-8 xl:items-end">
          <div>
            <p className="text-white"> International</p>
            <p className="text-white font-bold text-[52.06px] leading-tight">
              {" "}
              {title}{" "}
            </p>
          </div>

          <div className="border border-white/30 p-4 rounded-[8px] self-end">
            <p className="text-white">Works</p>
            <p className="text-white font-bold text-[20.81px]">{day}</p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <p className="text-white text-14">{website}</p>
          <p className="text-white text-14">{awards} awards</p>
        </div>
      </div>
    </div>
  );
}

export default CreatorCard1;
