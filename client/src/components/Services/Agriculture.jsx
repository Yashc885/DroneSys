'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faVideo, faCameraRetro, faFilm, faCamera, faPlayCircle  , faLeaf ,faWater , faSeeds} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// Mock customerReviews data for demonstration
const customerReviews = [
  {
    name: "Esther Howard",
    location: "Texas, USA",
    message: "AgriTech Solutions revolutionized our farm management. Their technology provided valuable insights that helped us improve yield and efficiency."
  },
  {
    name: "John Doe",
    location: "California, USA",
    message: "With AgriTech Solutions, we were able to optimize our irrigation and crop management. Their support and technology are top-notch."
  },
  {
    name: "Alice Smith",
    location: "New York, USA",
    message: "The advanced agricultural tools provided by AgriTech Solutions have been instrumental in modernizing our farming practices. Highly recommended!"
  },
  {
    name: "Bob Johnson",
    location: "Florida, USA",
    message: "AgriTech Solutions helped us implement precision farming techniques that have significantly increased our productivity. Great service and technology."
  },
  {
    name: "Jane Brown",
    location: "Washington, USA",
    message: "The smart farming solutions from AgriTech Solutions have transformed our approach to agriculture. The data-driven insights are incredibly useful."
  },
  {
    name: "Robert Wilson",
    location: "Texas, USA",
    message: "Our farm's efficiency has greatly improved thanks to AgriTech Solutions. Their technology is user-friendly and effective."
  },
  {
    name: "Mary Lee",
    location: "California, USA",
    message: "AgriTech Solutions offers exceptional service and innovative solutions. Their technology has helped us better manage our crops and resources."
  },
  {
    name: "David Miller",
    location: "Texas, USA",
    message: "The agricultural insights provided by AgriTech Solutions have been invaluable. We've seen a noticeable improvement in our yield and resource management."
  },
  {
    name: "Sarah Johnson",
    location: "Florida, USA",
    message: "We are very satisfied with the smart farming solutions from AgriTech Solutions. Their technology is reliable and has enhanced our farming operations."
  },
  {
    name: "Michael Brown",
    location: "New York, USA",
    message: "AgriTech Solutions delivered excellent results for our farm. Their tools and services are highly effective and have made a real difference."
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

const Agriculture = () => {
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
            <h2 className="text-title text-center">Innovative Solutions for Modern Agriculture</h2>
            <p className="text-descritpion">
              Transform your farming practices with our cutting-edge agricultural technology. From precision farming to smart irrigation systems, our solutions are designed to increase efficiency and enhance crop management.
            </p>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>1k+</p>
                <p>Optimized Farms</p>
              </div>
              <div className="text-stats-container">
                <p>500+</p>
                <p>Successful Projects</p>
              </div>
              <div className="text-stats-container">
                <p>8+</p>
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

      {/* Info Section */}
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
            icon={faSeeds}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="review-section" id="reviews">
        <div className="rw-text-content">
          <p className="rw-text-title text-center items-center">
            More over <span className="rw-text-num">1500+ Farms</span>
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

export default Agriculture;
