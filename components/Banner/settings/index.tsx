import React from "react";

export const setting = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 12,
  slidesToScroll: 1,
  initialSlide: 0,
  // centerPadding: "15px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
  ],
};

export const contentStyle = { 
    dots: true,
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    infinite: true,
    easing: "linear",
    speed: 300,
}