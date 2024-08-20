import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterSlider from "./FooterSlider";
import EmailForm from './EmailForm';
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
                <Link href='/'>
                  <Image
                    src="https://tropogo.com/assets/images/footer/ic_tropogologo.svg"
                    alt="logo"
                    width={150} // Adjust width as per your design
                    height={40} // Adjust height as per your design
                  />
                </Link>
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
                    <li className="mb-2"><a href="/" className="text-white hover:text-red-500">Home</a></li>
                    <li className="mb-2"><a href="/aboutus" className="text-white hover:text-red-500">About</a></li>
                    <li className="mb-2"><a href="/services" className="text-white hover:text-red-500">Services</a></li>
                    <li className="mb-2"><a href="/listview" className="text-white hover:text-red-500">Listview</a></li>
                    <li className="mb-2"><a href="/mapview" className="text-white hover:text-red-500">Mapview</a></li>
                  </ul>
                </div>
                <div className="md:w-[50%]">
                  <ul className="space-y-3">
                    <li><a href="/services" className="text-white hover:text-red-500">Our Services</a></li>
                    <li><a href="#" className="text-white hover:text-red-500">Expert Team</a></li>
                    <li><a href="#" className="text-white hover:text-red-500">Contact Us</a></li>
                    <li><a href="#" className="text-white hover:text-red-500">Latest News</a></li>
                    <li><a href="/faq" className="text-white hover:text-red-500">FAQ</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold text-red-500 mb-8 relative">Subscribe
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <p className="mb-6 text-white">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                <EmailForm />
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
