import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = " " }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if(!itemRef.current) 
      return;
    setTransformStyle(
      `rotateX(${e.clientY / window.innerHeight * 20}deg) rotateY(${
        e.clientX / window.innerWidth * -20}deg)`
    )
  }
  const handleMouseLeave = () => {
    setTransformStyle("");
  }

  return (
    <div
  className={className}
  ref={itemRef}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ transform: transformStyle }} // Fix: Move style here
>
  {children}
</div>
  )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div className="bento-title special-font">
          {title}
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>

    </div>
  )
}


const Feature = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of product converage into an interconnected overlay experience
          </p>
        </div>

        <BentoTilt className="border-hsl relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure "

          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-title_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src='videos/feature-2.mp4'
              title={<>zig<b>m</b>a</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="bento-title_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>n<b>e</b>xus</>}
              description="
A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction
COMING SOONCOMING SOON
COMING SOON
LAUNCH SITELAUNCH SITE
LAUNCH SITE
"
            />
          </BentoTilt>
          <BentoTilt className="bento-title_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>az<b>u</b>l</>}
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>
          <div className="bento-title_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">M<b>o</b>re Co<b>m</b>ing So<b>o</b>n</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end " />
            </div>


          </div>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />

          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;
