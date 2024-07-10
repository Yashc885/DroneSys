import React from 'react';
import Image from 'next/image'; // Import next/image for optimized images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterSlider from "./FooterSlider";
const Footer = () => {
  return (
    <>
    <footer className="min-h-[20vh] px-8 pt-5 relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: 'url("https://e1.pxfuel.com/desktop-wallpaper/682/1001/desktop-wallpaper-10-amazing-nature-footage-by-drones-drones.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl"></div>
      <div className="container mx-auto py-10 relative z-10">
        <div className="footer-content py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="footer-logo mb-6">
                <a href="index.html">
                  {/* Use next/image for optimized image */}
                  <Image
                    src="https://tropogo.com/assets/images/footer/ic_tropogologo.svg"
                    alt="logo"
                    width={150} // Adjust width as per your design
                    height={40} // Adjust height as per your design
                  />
                </a>
              </div>
              <div className="footer-text mb-6">
                <p className="text-white justify justify-between">
                  The Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum purus eget leo suscipit, id luctus arcu pulvinar. Integer aliquet libero nec lacus tempus, vel fringilla metus.
                </p>
              </div>
              <div className="footer-social-icon">
  <span className="block text-lg font-semibold mb-4">Follow us</span>
  <a href="#" className="text-white mr-3 bg-blue-700 p-2 rounded-full inline-block">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="#" className="text-white mr-3 bg-blue-400 p-2 rounded-full inline-block">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="text-white bg-red-600 p-2 rounded-full inline-block">
    <FontAwesomeIcon icon={faGooglePlusG} />
  </a>
</div>

            </div>
            <div>
              <h3 className="text-lg font-semibold mb-8 text-red-500 relative">Useful Links
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <div className="md:flex">
                <div className="md:w-[50%]">
                  <ul>
                    <li className="mb-2"><a href="#" className="text-white hover:text-blue-400">Home</a></li>
                    <li className="mb-2"><a href="#" className="text-white hover:text-blue-400">About</a></li>
                    <li className="mb-2"><a href="#" className="text-white hover:text-blue-400">Services</a></li>
                    <li className="mb-2"><a href="#" className="text-white hover:text-blue-400">Listview</a></li>
                    <li className="mb-2"><a href="#" className="text-white hover:text-blue-400">Mapview</a></li>
                  </ul>
                </div>
                <div className="md:w-[50%]">
                  <ul className="space-y-3">
                    <li><a href="#" className="text-white hover:text-blue-400">Our Services</a></li>
                    <li><a href="#" className="text-white hover:text-blue-400">Expert Team</a></li>
                    <li><a href="#" className="text-white hover:text-blue-400">Contact Us</a></li>
                    <li><a href="#" className="text-white hover:text-blue-400">Latest News</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-red-500 mb-8 relative">Subscribe
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <p className="mb-6 text-white">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <form className="relative">
                <input type="text" placeholder="Email Address" className="w-full py-3 px-4  border-gray-600 text-white placeholder-text-gray-400  focus:outline-none" />
                <button className="absolute right-0 top-0 mt-1 mr-1 bg-blue-400 py-3 px-4 text-white">
                  <i className="fab fa-telegram-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <FooterSlider />
    </>
  );
};

export default Footer;
