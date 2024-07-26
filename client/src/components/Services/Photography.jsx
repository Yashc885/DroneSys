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
    message: "Health Plus transformed my healthcare experience! The online consultations were so convenient, and the doctors were knowledgeable and caring."
  },
  {
    name: "John Doe",
    location: "California, USA",
    message: "I found the perfect specialist for my condition through Health Plus. The personalized treatment plan made all the difference. Thank you for prioritizing my health!"
  },
  {
    name: "Alice Smith",
    location: "New York, USA",
    message: "Booking appointments was a breeze, and the service exceeded my expectations. The doctors truly listen and provide effective solutions. 5 stars!"
  },
  {
    name: "Bob Johnson",
    location: "Florida, USA",
    message: "Health Plus is a game-changer! The emergency care saved me during a critical situation. Grateful for their quick and efficient support."
  },
  {
    name: "Jane Brown",
    location: "Washington, USA",
    message: "I used to dread dental visits, but Health Plus made it a pleasant experience. The dentist was gentle and professional. I'll definitely be back!"
  },
  {
    name: "Robert Wilson",
    location: "Texas, USA",
    message: "Finally, a healthcare platform that puts patients first! The heart disease service provided comprehensive care and regular follow-ups. Thank you, Health Plus!"
  },
  {
    name: "Mary Lee",
    location: "California, USA",
    message: "I've been using Health Plus for a variety of health concerns, and each time, I received exceptional care. It's my go-to for all medical needs!"
  },
  {
    name: "David Miller",
    location: "Texas, USA",
    message: "I highly recommend Health Plus for online consultations. It's convenient, secure, and the doctors are top-notch. Great job, team!"
  },
  {
    name: "Sarah Johnson",
    location: "Florida, USA",
    message: "The convenience of accessing medical notes online was fantastic. Health Plus made managing my health records hassle-free! Best Healthcare services."
  },
  {
    name: "Michael Brown",
    location: "New York, USA",
    message: "As a busy professional, Health Plus has been a lifesaver. Quick prescriptions and refills without compromising on quality care. Thank you!"
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

const Photography = () => {
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
            <h2 className="text-title text-center ">Elevate Your Shots with Drone Photography</h2>
            <p className="text-descritpion">
              Capture breathtaking aerial views and high-definition imagery with our drone services.
              Experience fast, professional drone photography for events, real estate, and more—delivered
              with cutting-edge technology and expert precision.
            </p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>1k+</p>
                <p>Stunning Aerial Shots</p>
              </div>
              <div className="text-stats-container">
                <p>200+</p>
                <p>Successful Projects</p>
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
              alt="Photo"
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
            We provide high-quality aerial photography services designed to capture stunning visuals
            from unique perspectives. Our advanced drone technology allows us to deliver detailed and
            professional images for a variety of needs, including real estate, events, and landscape photography. Whether you need dynamic shots for a project or breathtaking views for personal use,
            our experienced team ensures precision and excellence in every frame.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard
            title="Event Photography"
            description="Our Event Photography service captures every special moment with high-definition drone imagery. Whether it’s a wedding, corporate event, or any special occasion, our drones provide a unique perspective that enhances the visual storytelling of your event."
            icon={faCamera}
          />
          <InformationCard
            title="Real Estate Imaging"
            description="Showcase properties with breathtaking aerial views that highlight the best features of real estate listings. Our drone photography delivers stunning, detailed images that help attract potential buyers and elevate property marketing."
            icon={faBuilding}
          />
          <InformationCard
            title="Landscape Photography"
            description="Capture the beauty of landscapes with our professional drone services. From sweeping vistas to detailed top-down views, our drones provide exceptional quality imagery that brings the natural world into focus."
            icon={faMountain}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="review-section" id="reviews">
        <div className="rw-text-content">
          <p className="rw-text-title text-center items-center">
            More over <span className="rw-text-num">1500+ Customers</span>
          </p>
          <p className="rw-text-desc text-center items-center">Don't believe us, Check clients' words</p>
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

export default Photography;
