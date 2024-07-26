'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faVideo, faCameraRetro, faFilm, faCamera, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// Mock customerReviews data for demonstration
const customerReviews = [
  {
    name: "Esther Howard",
    location: "Texas, USA",
    message: "Videography Pros captured our wedding day beautifully. The quality of the videos was exceptional, and the attention to detail was incredible."
  },
  {
    name: "John Doe",
    location: "California, USA",
    message: "We hired Videography Pros for our corporate event, and they delivered beyond our expectations. The promotional video they created was both professional and engaging."
  },
  {
    name: "Alice Smith",
    location: "New York, USA",
    message: "The event coverage from Videography Pros was top-notch. Their team was professional, and the final video captured every special moment perfectly."
  },
  {
    name: "Bob Johnson",
    location: "Florida, USA",
    message: "Videography Pros made our product launch event unforgettable. The video quality was fantastic, and the creative shots were exactly what we needed."
  },
  {
    name: "Jane Brown",
    location: "Washington, USA",
    message: "The team at Videography Pros delivered an outstanding promotional video for our brand. Their creativity and expertise are unmatched."
  },
  {
    name: "Robert Wilson",
    location: "Texas, USA",
    message: "From start to finish, working with Videography Pros was a great experience. The video they produced for our real estate listing was exceptional."
  },
  {
    name: "Mary Lee",
    location: "California, USA",
    message: "Videography Pros provided excellent service for our music video project. The final product was stunning and exceeded our expectations."
  },
  {
    name: "David Miller",
    location: "Texas, USA",
    message: "We are thrilled with the video content produced by Videography Pros. Their attention to detail and creativity were evident in every frame."
  },
  {
    name: "Sarah Johnson",
    location: "Florida, USA",
    message: "Videography Pros delivered a professional video for our non-profit event. Their work helped us capture the essence of our cause beautifully."
  },
  {
    name: "Michael Brown",
    location: "New York, USA",
    message: "The wedding video created by Videography Pros was amazing. They captured every special moment and created a beautiful keepsake for us."
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

const Videography = () => {
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
            <h2 className="text-title text-center">Capture Moments with Professional Videography</h2>
            <p className="text-descritpion">
              Our videography services offer high-quality video production for events, corporate projects, and promotional content. Experience professional video services that capture the essence of your moments with clarity and creativity.
            </p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>500+</p>
                <p>Stunning Videos Produced</p>
              </div>
              <div className="text-stats-container">
                <p>300+</p>
                <p>Successful Projects</p>
              </div>
              <div className="text-stats-container">
                <p>7+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <Image
              className="hero-image1"
              src="https://img.freepik.com/free-photo/creative-cinematography-video-production_1150-10722.jpg"
              alt="Videography"
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
            Our videography services are designed to capture your most important moments with professional quality. Whether it’s a wedding, corporate event, or promotional video, we use the latest technology and creative techniques to deliver stunning video content.
          </p>
        </div>
        <div className="info-cards-content">
          <InformationCard
            title="Event Videography"
            description="Capture every moment of your event with our professional videography services. From weddings to corporate gatherings, our team provides high-quality video production that preserves the essence of your special moments."
            icon={faVideo}
          />
          <InformationCard
            title="Corporate Videos"
            description="Enhance your brand’s image with high-impact corporate videos. We create engaging and professional content that showcases your company, products, and services effectively."
            icon={faCameraRetro}
          />
          <InformationCard
            title="Promotional Videos"
            description="Drive your marketing efforts with eye-catching promotional videos. Our videography team crafts compelling content that captures your audience’s attention and communicates your message clearly."
            icon={faFilm}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="review-section" id="reviews">
        <div className="rw-text-content">
          <p className="rw-text-title text-center items-center">
            More over <span className="rw-text-num">1500+ Clients</span>
          </p>
          <p className="rw-text-desc text-center items-center">See what our clients are saying</p>
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

export default Videography;
