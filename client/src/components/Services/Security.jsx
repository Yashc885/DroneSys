'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faShieldAlt, faCamera, faLock, faBuilding, faBell } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// Mock customerReviews data for demonstration
const customerReviews = [
  {
    name: "Esther Howard",
    location: "Texas, USA",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, libero eget faucibus scelerisque, dolor felis cursus lorem, aliquet."
  },
  {
    name: "John Doe",
    location: "California, USA",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, libero eget faucibus scelerisque, dolor felis cursus lorem, aliquet."
  },
  {
    name: "Alice Smith",
    location: "New York, USA",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, libero eget faucibus scelerisque, dolor felis cursus lorem, aliquet."
  },
];


const InformationCard = ({ title, description, icon }) => (
  <div className="info-cards">
    <span className="info-card-icon">
      <FontAwesomeIcon className="info-fa-icon" icon={icon} />
    </span>
    <p className="info-card-title">{title}</p>
    <p className="info-card-description">{description}</p>
  </div>
);

const Security = () => {
  const [goUp, setGoUp] = useState(false);
  const [review, setReview] = useState(0);
  const reviewsLength = customerReviews.length - 1;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const { name, location, message } = customerReviews[review] || {};

  return (
    <div>
      {/* Hero Section */}
      <div className="section-container">
        <div className="hero-section">
          <div className="text-section">
            <h2 className="text-title text-center ">Security with Advanced  Solutions</h2>
            <p className="text-descritpion">
              Enhance your security with our state-of-the-art surveillance systems and monitoring services. Whether for residential, commercial, or industrial needs, our technology ensures robust protection and peace of mind.
            </p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>500+</p>
                <p>Secure Installations</p>
              </div>
              <div className="text-stats-container">
                <p>300+</p>
                <p>Satisfied Clients</p>
              </div>
              <div className="text-stats-container">
                <p>10+</p>
                <p>Years of Expertise</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <Image
              className="hero-image1"
              src="https://img.freepik.com/premium-photo/consumer-drone-most-amazing-hd-8k-wallpaper-background-stock-photographic-image_915071-24368.jpg"
              alt="Security Services"
              layout="responsive"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section" id="services">
        <div className="info-title-content">
          <h3 className="info-title">
            <span>What We Do</span>
          </h3>
          <p className="info-description">
            We provide comprehensive security solutions tailored to meet your needs. Our services include advanced surveillance systems, alarm installations, and integrated security management. With a focus on reliability and cutting-edge technology, we ensure that your property is secure and monitored effectively.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard
            title="Surveillance Systems"
            description="Our state-of-the-art surveillance systems offer high-resolution video capture, real-time monitoring, and remote access. Ideal for both residential and commercial properties, our cameras provide comprehensive coverage and peace of mind."
            icon={faCamera}
          />
          <InformationCard
            title="Alarm Systems"
            description="Enhance your security with our advanced alarm systems. Designed to detect and alert you to potential threats, our alarms provide timely notifications and reliable protection."
            icon={faBell}
          />
          <InformationCard
            title="Access Control"
            description="Manage and control access to your property with our sophisticated access control solutions. From keycard systems to biometric scanners, we provide tailored solutions to secure entry points and restrict unauthorized access."
            icon={faLock}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="review-section" id="reviews">
        <div className="rw-text-content">
          <p className="rw-text-title text-center items-center">
            More over <span className="rw-text-num">1500+ Clients</span>
          </p>
          <p className="rw-text-desc text-center items-center">Hear from our satisfied clients</p>
          <p className="rw-text-format py-4 flex items-center justify-center text-center w-[80%] mx-auto">
          <span className="rw-text-quote1 text-2xl">[</span>
          <span className="rw-review mx-2 text-lg">{message}</span>
          <span className="rw-text-quote2 text-2xl">]</span>
          </p>

          <div className="rw-authors">
            <div className="rw-names">
              <p className="rw-reviewer-name">{name}</p>
              <p className="rw-reviewer-place">{location}</p>
            </div>
            <div className="rw-btns">
              <button
                className="rw-next-btn"
                type="button"
                onClick={backBtnClick}
              >
                ←
              </button>
              <button
                className="rw-next-btn"
                type="button"
                onClick={frontBtnClick}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
