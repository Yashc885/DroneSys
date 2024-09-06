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
  const [stats, setStats] = useState({ farms: 0, projects: 0, years: 0 });
  const [showStats, setShowStats] = useState(false);
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

  useEffect(() => {
    // Counter logic
    let counterInterval;
    if (!showStats) {
      const startTime = Date.now();
      const duration = 1000; // Duration of the counter animation in milliseconds

      const initialStats = { farms: 0, projects: 0, years: 0 };
      const targetStats = { farms: 1000, projects: 500, years: 8 };

      counterInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1); // Normalize progress to 0-1
        setStats({
          farms: Math.floor(targetStats.farms * progress),
          projects: Math.floor(targetStats.projects * progress),
          years: Math.floor(targetStats.years * progress),
        });

        if (progress === 1) {
          clearInterval(counterInterval);
          setShowStats(true);
        }
      }, 20); 
    }

    return () => clearInterval(counterInterval);
  }, [showStats]);

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
              <p>{showStats ? `${stats.farms}+` : '...'}</p>
                <p>Secure Installations</p>
              </div>
              <div className="text-stats-container">
              <p>{showStats ? `${stats.projects}+` : '...'}</p>
                <p>Satisfied Clients</p>
              </div>
              <div className="text-stats-container">
              <p>{showStats ? `${stats.years}+` : '...'}</p>
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
      <div className="review-section py-8" id="reviews">
      <div className="rw-text-content text-center mx-auto max-w-4xl">
        <p className="rw-text-title text-2xl font-bold mb-4">
          More over <span className="rw-text-num font-bold">1500+ secured</span>
        </p>
        <p className="rw-text-desc text-lg mb-8">Hear from our satisfied clients</p>
        <div className="rw-text-format py-4 flex flex-col items-center justify-center">
          <span className="rw-text-quote1 text-4xl">"</span>
          <p className="rw-review mx-4 text-lg">{message}</p>
          <span className="rw-text-quote2 text-4xl">"</span>
        </div>
        <div className="rw-authors mt-8">
          <div className="rw-names mb-4">
            <p className="rw-reviewer-name text-lg font-semibold">{name}</p>
            <p className="rw-reviewer-place text-sm text-gray-600">{location}</p>
          </div>
          <div className="rw-btns flex justify-center gap-4">
            <button
              className="rw-next-btn px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-sm hover:bg-gray-300"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-sm hover:bg-gray-300"
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
