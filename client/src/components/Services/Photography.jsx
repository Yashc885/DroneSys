'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faAngleUp, faHeartPulse, faTruckMedical, faTooth, faCamera, faBuilding, faMountain } from '@fortawesome/free-solid-svg-icons';
import './index.css';

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

const Photography = () => {
  const [goUp, setGoUp] = useState(false);
  const [review, setReview] = useState(0);
  const reviewsLength = customerReviews.length - 1;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.addEventListener('scroll', onPageScroll);
    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
  }, []);

  const { name, location, message } = customerReviews[review] || {};

  return (
    <div>
      {/* Hero Section */}
      <div className="section-container">
        <div className="hero-section">
          <div className="text-section">
            <h2 className="text-title text-center">Elevate Your Shots with Drone Photography</h2>
            <p className="text-description">
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
          className={`scroll-up ${goUp ? 'show-scroll' : ''}`}
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
          <p className="rw-text-desc text-center items-center">Dont believe us, Check clients&apos; words</p>
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

export default Photography;
