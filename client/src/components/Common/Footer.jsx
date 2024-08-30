'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterSlider from './FooterSlider';
import EmailForm from './EmailForm';

const Footer = () => {
  return (
    <>
      <footer className="min-h-[20vh] px-8 pt-5 relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: 'url("https://e1.pxfuel.com/desktop-wallpaper/682/1001/desktop-wallpaper-10-amazing-nature-footage-by-drones-drones.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
        <div className="container mx-auto py-10 relative z-10">
          <div className="footer-content py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="footer-logo mb-6">
                <Link href="/" passHref>
                  <div>
                    <Image
                      src="https://tropogo.com/assets/images/footer/ic_tropogologo.svg"
                      alt="Tropogo Logo"
                      width={150}
                      height={40}
                      layout="intrinsic"
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-white mb-6">
                The Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum purus eget leo suscipit, id luctus arcu pulvinar. Integer aliquet libero nec lacus tempus, vel fringilla metus.
              </p>
              <div className="footer-social-icons flex space-x-3">
                    <a
                      href="#"
                      className="text-white bg-blue-700 p-4 rounded-full hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-white bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faTwitter} className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-white bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faGooglePlusG} className="text-xl" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-8 text-red-500 relative">
                Useful Links
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <div className="flex ">
                <ul className="w-1/2 mb-6 space-y-2">
                  <li><Link href="/" passHref><div className="text-white hover:text-red-500">Home</div></Link></li>
                  <li><Link href="/aboutus" passHref><div className="text-white hover:text-red-500">About</div></Link></li>
                  <li><Link href="/services" passHref><div className="text-white hover:text-red-500">Services</div></Link></li>
                  <li><Link href="/listview" passHref><div className="text-white hover:text-red-500">Listview</div></Link></li>
                  <li><Link href="/mapview" passHref><div className="text-white hover:text-red-500">Mapview</div></Link></li>
                </ul>
                <ul className="w-1/2 space-y-2">
                  <li><Link href="/services" passHref><div className="text-white hover:text-red-500">Our Services</div></Link></li>
                  <li><a href="#" className="text-white hover:text-red-500">Expert Team</a></li>
                  <li><Link href="/contact" passHref><div className="text-white hover:text-red-500">Contact Us</div></Link></li>
                  <li><a href="#" className="text-white hover:text-red-500">Latest News</a></li>
                  <li><Link href="/faq" passHref><div className="text-white hover:text-red-500">FAQ</div></Link></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-red-500 mb-8 relative">
                Subscribe
                <span className="block h-0.5 w-12 bg-blue-400 absolute -bottom-4 left-0"></span>
              </h3>
              <p className="text-white mb-6">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <EmailForm />
            </div>
          </div>
        </div>
      </footer>
      <FooterSlider />
    </>
  );
};

export default Footer;
