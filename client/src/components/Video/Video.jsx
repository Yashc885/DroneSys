import React from 'react';

const Video = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center text-center py-8 px-4 ">
      <h1 className="text-xl md:text-3xl font-extrabold text-red-500">Massive payload due to increase Thanks To</h1>
        <h2 className="text-xl md:text-3xl font-extrabold mb-4">Coaxial Twin Router  </h2>
        <div className="items-center text-center w-3/4">
        <p className="text-md md:text-lg mb-4 text-black">
          The Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum purus eget leo suscipit, 
          id luctus arcu pulvinar. Integer aliquet libero ne
        </p>
        </div>
      </div>
      <div className="py-4 "></div>

      <div className="relative w-full flex items-center justify-center py-8 md:py-12  px-4">
        <div className="relative w-full max-w-3xl  h-48 md:h-60 bg-red-500 rounded-3xl shadow-xl flex flex-col items-center ">
          <div className="absolute top-[-40%] left-1/2 transform -translate-x-1/2 w-3/4 max-w-4xl rounded-full">
            <iframe
              className="w-full h-56 rounded-3xl md:rounded-full"
              src="https://www.youtube.com/embed/kcfs1-ryKWE?si=WuFHHDwZcP6-W8fd"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
