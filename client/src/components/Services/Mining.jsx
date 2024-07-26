'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faHeartPulse, faTruckMedical, faTooth, faCamera, faBuilding, faMountain } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// Mock customerReviews data for demonstration
const customerReviews = [
  {
    name: "Esther Howard",
    location: "Texas, USA",
    message: "Mining Plus provided exceptional aerial shots of our mining site. The clarity and detail were unparalleled. Highly recommended!"
  },
  {
    name: "John Doe",
    location: "California, USA",
    message: "The mining site inspections were made so much easier with Mining Plus's drone services. Efficient and professional throughout."
  },
  {
    name: "Alice Smith",
    location: "New York, USA",
    message: "Mining Plus captured our site with impressive detail. The aerial views are crucial for our project planning. Fantastic work!"
  },
  {
    name: "Bob Johnson",
    location: "Florida, USA",
    message: "Incredible imagery from Mining Plus! Their drones provided invaluable data for our operations. A game-changer in site management."
  },
  {
    name: "Jane Brown",
    location: "Washington, USA",
    message: "Mining Plus made our geological surveys so much easier with their high-definition drone footage. Excellent service!"
  },
  {
    name: "Robert Wilson",
    location: "Texas, USA",
    message: "The drone footage from Mining Plus was crucial for our environmental impact assessments. Highly detailed and reliable."
  },
  {
    name: "Mary Lee",
    location: "California, USA",
    message: "Mining Plus's aerial photography was perfect for documenting our mining progress. Their attention to detail is commendable."
  },
  {
    name: "David Miller",
    location: "Texas, USA",
    message: "The precision in Mining Plus's drone images has been instrumental for our project development. Outstanding quality!"
  },
  {
    name: "Sarah Johnson",
    location: "Florida, USA",
    message: "Managing our mining sites has never been easier with Mining Plus's advanced aerial imagery. Great service and support."
  },
  {
    name: "Michael Brown",
    location: "New York, USA",
    message: "Mining Plus provided comprehensive aerial views for our new site. The detail and clarity were crucial for our operations."
  }
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

const Mining = () => {
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
            <h2 className="text-title text-center">Elevate Your Mining Insights with Drone</h2>
            <p className="text-descritpion">
              Capture detailed aerial views of your mining sites with our specialized drone services. From site inspections to progress monitoring, experience high-definition imagery delivered with precision and expertise.
            </p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>1k+</p>
                <p>Detailed Site Images</p>
              </div>
              <div className="text-stats-container">
                <p>200+</p>
                <p>Successful Mining Projects</p>
              </div>
              <div className="text-stats-container">
                <p>5+</p>
                <p>Years of Expertise</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <Image
              className="hero-image1"
              src="https://img.freepik.com/premium-photo/consumer-drone-most-amazing-hd-8k-wallpaper-background-stock-photographic-image_915071-24368.jpg"
              alt="Mining Photography"
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
            We offer specialized aerial photography services tailored to the mining industry. Our drones capture detailed images of mining sites, facilitating inspections, progress tracking, and comprehensive site documentation. With advanced technology and skilled operators, we deliver high-quality visuals that support efficient project management and planning.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard
            title="Site Inspections"
            description="Our drone services provide detailed aerial views of mining sites for efficient inspections. Capture every angle and monitor progress with high-definition imagery."
            icon={faCamera}
          />
          <InformationCard
            title="Progress Monitoring"
            description="Track the progress of your mining operations with our comprehensive aerial imagery. Our drones deliver clear and detailed shots to support project management."
            icon={faBuilding}
          />
          <InformationCard
            title="Geological Surveys"
            description="Enhance your geological surveys with our advanced drone technology. Obtain precise, high-resolution images that aid in environmental assessments and site evaluations."
            icon={faMountain}
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
          <span className="rw-text-quote1 text-2xl">''</span>
          <span className="rw-review mx-2 text-lg">{message}</span>
          <span className="rw-text-quote2 text-2xl">''</span>
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

export default Mining;
