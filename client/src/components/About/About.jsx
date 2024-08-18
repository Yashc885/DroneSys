'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import AboutPic from "../../assets/about.png";

const About = () => {
  useEffect(() => {
    const cardImages = document.querySelectorAll(".card-image");
    const cardTitles = document.querySelectorAll(".card-title");
    const cardDescriptions = document.querySelectorAll(".card-description");
    const cardMediaIcons = document.querySelectorAll(".card-mediaIcons a");
    const cardImgs = document.querySelectorAll(".card-image img");
    const cardTitleSpans = document.querySelectorAll(".card-title span");
    const cardDescSpans = document.querySelectorAll(".card-description span");
    const mediaIcons = document.querySelectorAll(".card-mediaIcons a i");

    const renderCard = () => {
      // Remove the skeleton loading effect
      cardImages.forEach((cardImage) => cardImage.classList.remove("loading"));
      cardTitles.forEach((cardTitle) => cardTitle.classList.remove("loading"));
      cardDescriptions.forEach((cardDescription) => cardDescription.classList.remove("loading"));
      cardMediaIcons.forEach((cardMediaIcon) => cardMediaIcon.classList.remove("loading"));

      // Show the hidden HTML elements
      cardImgs.forEach((cardImg) => cardImg.style.visibility = "visible");
      cardTitleSpans.forEach((cardTitleSpan) => cardTitleSpan.style.visibility = "visible");
      cardDescSpans.forEach((cardDescSpan) => cardDescSpan.style.visibility = "visible");
      mediaIcons.forEach((mediaIcon) => mediaIcon.style.visibility = "visible");
    };

    setTimeout(() => renderCard(), 1000);
  }, []);

  return (
    <div className="font-sans antialiased">
      {/* Company Section */}
      <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={AboutPic}
            alt="About Team"
            layout="responsive"
            width={300}
            height={100}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col pl-2 md:pl-4   ">
          <h3 className="text-2xl md:text-4xl text-center font-extrabold text-gray-800">
            ABOUT <span className="text-red-500">OUR ORGANISSATION</span>
          </h3>
          <p className="mt-4 text-gray-700 justify-normal items-center " >
          At  <b className="font-bold">Accel</b>, we are revolutionizing the way industries utilize aerial technology. 
         Specializing in advanced drone services, we offer innovative solutions that span multiple sectors, including agriculture,
          construction, surveillance, and environmental monitoring. Our cutting-edge drones and state-of-the-art technology deliver
           precise data and unparalleled insights, driving efficiency and transforming traditional practices.
          </p>
          <p className="mt-4 text-gray-700 justify-normal items-center " >
          Our team of skilled professionals is dedicated to providing high-quality drone services tailored to meet the unique 
          needs of our clients. With extensive industry experience and a commitment to safety, we ensure that every project is executed 
          with the highest standards of professionalism and care. Whether its aerial surveys, inspections, or live streaming, we 
          leverage our expertise to deliver exceptional results.
          </p>
          <p className="mt-4 text-gray-700 justify-normal items-center " >
          We are passionate about pushing the boundaries of whats possible with drone technology. By continuously investing in research 
          and development, we strive to stay at the forefront of innovation, providing our clients with the most advanced solutions 
          available. At Acceledge , our mission is to harness the power of drones to drive progress and create lasting value
           for businesses and communities.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center py-12">
        <span className="text-2xl md:text-3xl font-extrabold text-red-500">OUR TEAM</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 mb-12">
        {/* Team Member 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden card-image loading">
          <Image
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Yash Falke"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl text-center font-extrabold text-gray-800 card-title loading">
              Yash<span className="text-red-500">Falke</span>
            </h3>
            <p className="mt-2 text-center text-gray-600 card-description loading">
              <span className="text-lg md:text-xl font-bold text-gray-700">Web Developer Head</span>
              <br />
              Pursuing MBA Engineering (VIT Mumbai)
              <br />
              <span className="text-extrabold text-black">Email: </span>
              <a href="mailto:yashfalke21@gmail.com" className="text-red-400">yashfalke21@gmail.com</a>
            </p>
            <div className="flex space-x-4 mt-4 card-mediaIcons loading">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Image
                  src="https://raw.githubusercontent.com/pico-india/main-django/main/static/PICO-LOGO-SHORT.png"
                  alt="Pico Logo"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/nikhfjaiswal17/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden card-image loading">
          <Image
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Priyansh Jaiswal"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl text-center font-extrabold text-gray-800 card-title loading">
              Priyansh<span className="text-red-500">Jaiswal</span>
            </h3>
            <p className="mt-2 text-center text-gray-600 card-description loading">
              <span className="text-lg md:text-xl font-bold text-gray-700">Graphic Team Head</span>
              <br />
              BCA (VIT Mumbai)
              <br />
              <span className="text-extrabold text-black">Email: </span>
              <a href="mailto:priya254@gmail.com" className="text-red-400">priya254@gmail.com</a>
            </p>
            <div className="flex space-x-4 mt-4 card-mediaIcons loading">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Image
                  src="https://raw.githubusercontent.com/pico-india/main-django/main/static/PICO-LOGO-SHORT.png"
                  alt="Pico Logo"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/priyansh_jaiswal17/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden card-image loading">
          <Image
            src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Nikhil Jaiswal"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl text-center font-extrabold text-gray-800 card-title loading">
              Nikhil<span className="text-red-500">Jaiswal</span>
            </h3>
            <p className="mt-2 text-center text-gray-600 card-description loading">
              <span className="text-lg md:text-xl font-bold text-gray-700">Marketing and Publicity Head</span>
              <br />
              Pursuing IT Engineering (VIT Mumbai)
              <br />
              <span className="text-extrabold text-black">Email: </span>
              <a href="mailto:nikhajaiswal21@gmail.com" className="text-red-400">nikhajaiswal21@gmail.com</a>
            </p>
            <div className="flex space-x-4 mt-4 card-mediaIcons loading">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Image
                  src="https://raw.githubusercontent.com/pico-india/main-django/main/static/PICO-LOGO-SHORT.png"
                  alt="Pico Logo"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/nikhfjaiswal17/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
