import Image from "next/image";
import React from "react";

const skillItems = [
  {
    id: 1,
    name: "HTML5",
    logo: "html.svg",
  },
  {
    id: 2,
    name: "CSS3",
    logo: "css.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    logo: "js.svg",
  },
  {
    id: 4,
    name: "React",
    logo: "react.svg",
  },
  {
    id: 5,
    name: "Next.js",
    logo: "nextjs.svg",
  },
];

const Banner = () => {
  return (
    <div className="min-h-screen flex items-center w-[80%] mx-auto">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          {/* Left Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Junior Designer
              <span className="block mt-4 text-orange-600">& Developer</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed">
              Hi, I&apos;m <span className="font-bold">Sanchita Devi</span>. A
              passionate Junior Designer and Front-End Developer based in Dhaka,
              Bangladesh.
            </p>

            <div className="pt-10 md:pt-16 flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-400 ">
                High knowledge on
              </h3>
              {/* Vertical divider */}

              <div className="h-8 border-r border-gray-300"></div>

              {/* Skill Items */}

              <div className="flex gap-2">
                {skillItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-white rounded-full p-3 gap-4 shadow-lg"
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative rounded-full overflow-hidden aspect-square mx-auto mt-10 md:mt-0">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Base Orange Circle */}
              <circle cx="200" cy="200" r="133" className="fill-orange-400" />

              {/* Wave Pattern Bubbles */}
              <g>
                {[...Array(36)].map((_, i) => {
                  const baseAngle = (i * 10 * Math.PI) / 180;
                  const waveOffset = Math.sin(baseAngle * 4) * 15; // Wave modulation
                  const currentRadius = 133 + waveOffset;

                  return (
                    <circle
                      key={i}
                      cx={200 + Math.cos(baseAngle) * currentRadius}
                      cy={200 + Math.sin(baseAngle) * currentRadius}
                      r="4"
                      className="fill-orange-200 opacity-90"
                    >
                      {/* Size Animation */}
                      <animate
                        attributeName="r"
                        values="4;10;4"
                        dur={`${1.5 + i * 0.1}s`}
                        repeatCount="indefinite"
                      />

                      {/* Wave Motion Animation */}
                      <animate
                        attributeName="cx"
                        values={`
              ${200 + Math.cos(baseAngle) * currentRadius};
              ${200 + Math.cos(baseAngle + 0.1) * (currentRadius + 5)};
              ${200 + Math.cos(baseAngle) * currentRadius}
            `}
                        dur={`${3 + i * 0.2}s`}
                        repeatCount="indefinite"
                      />

                      {/* Opacity Animation */}
                      <animate
                        attributeName="opacity"
                        values="0.4;0.9;0.4"
                        dur={`${2 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })}
              </g>

              {/* Wave Effect Gradient */}
              <radialGradient id="waveGradient">
                <stop offset="0%" className="stop-color-orange-400" />
                <stop offset="100%" className="stop-color-orange-600" />
              </radialGradient>

              {/* Animated Wave Path */}
              <path
                d="M200,15c110,0 200,85 200,185s-90,185-200,185S0,310 0,200S90,15 200,15z"
                className="fill-none stroke-orange-500 stroke-4"
              >
                <animate
                  attributeName="d"
                  values="
        M200,15c110,0 200,85 200,185s-90,185-200,185S0,310 0,200S90,15 200,15z;
        M200,30c100,0 190,75 190,170s-90,170-190,170S10,280 10,200S100,30 200,30z;
        M200,15c110,0 200,85 200,185s-90,185-200,185S0,310 0,200S90,15 200,15z
      "
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Inner Glow */}
              {/* <circle
                cx="200"
                cy="200"
                r="180"
                className="fill-url(#waveGradient) opacity-30"
              /> */}
            </svg>

            {/* Profile Image Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src="https://i.postimg.cc/Bv04BkQM/girl.png"
                alt="Alan Walker"
                className="rounded-full w-3/4 h-3/4 object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
