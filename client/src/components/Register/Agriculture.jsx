'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faLeaf, faWater } from "@fortawesome/free-solid-svg-icons";
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
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, libero iibiphpisd eget faucibus scelerisque, dolor felis cursus lorem, aliquet."
  },
  {
    name: "Alice Smith",
    location: "New York, USA",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing eliolor felis cursus lorem, aliquet."
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

const Agriculture = () => {
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
      <div className="section-container">
        <div className="hero-section">
          <div className="text-section">
            <h2 className="text-title text-center">Innovative Solutions for Modern Agriculture</h2>
            <p className="text-descritpion">
              Transform your farming practices with our cutting-edge agricultural technology. From precision farming to smart irrigation systems, our solutions are designed to increase efficiency and enhance crop management.
            </p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>{showStats ? `${stats.farms}+` : '...'}</p>
                <p>Optimized Farms</p>
              </div>
              <div className="text-stats-container">
                <p>{showStats ? `${stats.projects}+` : '...'}</p>
                <p>Successful Projects</p>
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
              src="https://img.freepik.com/free-photo/smart-farming-technology_1048-16755.jpg"
              alt="Agriculture"
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
      <div className="info-section" id="services">
        <div className="info-title-content">
          <h3 className="info-title">
            <span>What We Do</span>
          </h3>
          <p className="info-description">
            Our agricultural solutions are designed to support and enhance modern farming practices. From smart irrigation systems to precision farming tools, we provide technology that boosts productivity, optimizes resource use, and ensures sustainable agricultural practices.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard
            title="Precision Farming"
            description="Implement precision farming techniques with our advanced tools that provide detailed insights into crop health, soil conditions, and more. Optimize your farming practices for better yield and efficiency."
            icon={faLeaf}
          />
          <InformationCard
            title="Smart Irrigation"
            description="Enhance your irrigation practices with our smart irrigation systems. Automated and data-driven, these systems ensure optimal water usage, reducing waste and improving crop health."
            icon={faWater}
          />
          <InformationCard
            title="Crop Management"
            description="Utilize our crop management solutions to monitor and manage your crops effectively. From planting to harvest, our technology provides the data you need to make informed decisions and maximize your yield."
            icon={faWater}
          />
        </div>
      </div>
      <div className="review-section py-8" id="reviews">
        <div className="rw-text-content text-center mx-auto max-w-4xl">
          <p className="rw-text-title text-2xl font-bold mb-4">
            More over <span className="rw-text-num font-bold">1500+ Farms</span>
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

export default Agriculture;
