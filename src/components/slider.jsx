import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";

export default function SkillsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      <div style={styles.slide}>
        <Card
            imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWii01SU4R4pTMP_wkSfYTpxsy0ubQZpFfQ&s"}
            name={"Vedic Astrology"}
            description={"Vedic astrology, also known as Jyotish, is an ancient system of astrology that originated in India thousands of years ago. It is based on the positions and movements of planets in relation to the zodiac signs at the time of a person’s birth, using the sidereal zodiac. Vedic astrology aims to offer insight into personality traits, life events, strengths, and challenges, and is often used as a guide for self-understanding, timing important decisions, and understanding cycles in life."}
        />
      </div>
      <div style={styles.slide}>
        <Card
            imgUrl={"https://www.hindustantimes.com/ht-img/img/2024/12/26/550x309/8382882_1703584052437_1735216837197.jpg"}
            name={"Numerology"}
            description={"Numerology is the study of the symbolic meaning of numbers and their influence on human life. It is based on the belief that numbers derived from a person’s birth date and name can reveal insights about personality, strengths, challenges, and life purpose. By interpreting these numbers, numerology seeks to help individuals better understand themselves, recognize patterns, and make informed decisions."}
        />
      </div>
      <div style={styles.slide}>
        <Card
            imgUrl={"https://epica.com/cdn/shop/articles/Handwriting.png?v=1729810772"}
            name={"Graphology"}
            description={"Graphology is the study of handwriting as a means of understanding a person’s personality and behavior. It is based on the idea that handwriting reflects subconscious traits, emotions, and mental states. By analyzing features such as letter size, spacing, slant, and pressure, graphology aims to provide insights into characteristics like confidence, emotional expression, and thinking style."}
        />
      </div>
      <div style={styles.slide}>
        <Card
            imgUrl={"https://cdn-dkiij.nitrocdn.com/QCRYLtnHyYcQqfXzvwaDriTkeIeTTwrV/assets/images/optimized/rev-95ef2ec/www.agnitrafoundation.org/wp-content/uploads/2022/02/Vastu-Shastra-For-Home-Entrance-1024x576.jpg"}
            name={"Vaastu"}
            description={"Vaastu Shastra is an ancient Indian system of architecture and design that focuses on creating harmony between humans and their environment. It is based on natural elements and directional alignments to promote balance, health, and prosperity in living and working spaces. Vaastu offers guidelines for the layout, construction, and arrangement of buildings to enhance positive energy and well-being."}
        />
      </div>
    </Slider>
  );
}

const styles = {
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "50%",
    margin: "0 auto"
  },
};