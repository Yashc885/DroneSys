'use client'
import React from "react";
import NcImage from "./NcImage.jsx";
import HIW1img from "./../../assets/new/HIW1img.png";
import HIW2img from "./../../assets/new/HIW2img.png";
import HIW3img from "./../../assets/new/HIW3img.png";
import HIW4img from "./../../assets/new/HIW4img.png";
import VectorImg from "./../../assets/new/VectorHIW.svg";
import Badge from "./Badge.jsx";
import Image from "next/image";
const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    imgDark: HIW1img,
    title: "Filter & Discover",
    desc: "Smart filtering and suggestions make it easy to find",
  },
  {
    id: 2,
    img: HIW2img,
    imgDark: HIW2img,
    title: "Verify needs & product details ",
    desc: "Easily select the correct items and add them to the cart",
  },
  {
    id: 3,
    img: HIW3img,
    imgDark: HIW3img,
    title: "Book your service and product",
    desc: "Let Us now about your requirements along with dates ",
  },
  {
    id: 4,
    img: HIW4img,
    imgDark: HIW4img,
    title: "Verification and notification",
    desc: "We will verify and contact you shortly ",
  },
];

const Steps = ({ className = "", data = DEMO_DATA }) => {
  return (
    <>
      <div className="parallax-container">
        <div className="parallax-background"></div>
        <div className="slider-content py-4 md:py-6 lg:py-8">
          <div className="px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-red-500">Steps</h2>
              <h3 className="text-4xl font-extrabold mb-6">How to Do</h3>
            </div>
            <div className={`nc-SectionHowItWork ${className}`}>
              <div className="py-4 md:py-6 lg:py-8 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 bg-white">
                <Image
                  className="hidden md:block absolute inset-x-0 top-5"
                  src={VectorImg}
                  alt="vector"
                />
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative flex flex-col items-center max-w-xs mx-auto"
                  >
                    <Badge
                      name={`Step ${index + 1}`}
                      color={
                        index === 0
                          ? "red"
                          : index === 1
                          ? "indigo"
                          : index === 2
                          ? "yellow"
                          : "purple"
                      }
                    />
                    <NcImage
                      containerClassName="mb-4 sm:mb-6 max-w-[120px] mx-auto"
                      className="rounded-3xl"
                      src={item.img}
                      sizes="150px"
                      alt="HIW"
                    />
                    <div className="text-center mt-4 space-y-4">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <span className="block text-gray-500 text-sm leading-6">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
