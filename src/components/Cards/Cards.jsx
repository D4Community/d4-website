import React from "react";
import { Data } from "../../data/FoundersData";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Cards.css";
const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="cards">
      <Slider {...settings}>
        {Data.map((item) => (
          <div className="card">
            <div className="imgBox">
              <img src={item.Img} alt={item.name} />
            </div>
            <div className="content">
              <div className="details ">
                <h2>
                  {item.name} <br /> <span>{item.skill}</span>{" "}
                </h2>
                <ul className="sci">
                  <li>
                    <a href={item.gitLink}>
                      <BsGithub />
                    </a>
                  </li>
                  <li>
                    <a href={item.linkedinLink}>
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href={item.instaLink}>
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href={item.twitterLink}>
                      <BsTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
