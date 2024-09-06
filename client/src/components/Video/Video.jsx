import React from 'react';
import Image from 'next/image';
import Explore from './../../assets/explore.png';
import './style.css'
const Video = () => {
  return (
    <>
      <div className="parallax1-background relative w-full flex flex-col items-center text-center py-12 px-6">
        <h1 className="text-xl md:text-3xl font-bold text-red-600">
          Massive Payload Increase Thanks To The
        </h1>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-white">
          Coaxial Twin Rotor
        </h2>
        <div className="text-center w-full md:w-3/4 lg:w-2/3 mx-auto">
          <p className="text-md md:text-lg mb-6 text-white leading-relaxed">
            The AGRAS T40 features a coaxial twin rotor design that increases the payload capacity by 30% with a maximum payload of 50 kg and good.
          </p>
        </div>
      </div>
      <div className="py-4"></div>
      <div className="flex items-center justify-center mx-auto">
  <div className="relative flex items-center justify-center w-3/4 py-20 px-4 bg-red-500 rounded-tl-[100px] rounded-br-[100px]">
    <div className="relative w-3/4 max-w-5xl mx-auto">
      <div className="aspect-w-16 aspect-h-32 rounded-3xl overflow-hidden shadow-lg">
        <iframe
          className="w-full  h-56 md:h-96"
          src="https://www.youtube.com/embed/kcfs1-ryKWE?si=WuFHHDwZcP6-W8fd"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    <div className="absolute left-4 md:left-12 top-4 md:top-8 w-20 md:w-32 h-auto">
      <Image
        src={Explore}
        alt="Left Drone"
        layout="responsive"
        objectFit="contain"
      />
    </div>
    <div className="absolute right-4 md:right-12 bottom-4 md:bottom-8 w-20 md:w-32 h-auto">
      <Image
        src={Explore}
        alt="Right Drone"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default Video;
