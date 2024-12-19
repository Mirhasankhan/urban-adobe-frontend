import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/room1.webp";
import slide2 from "../../assets/room2.webp";
import slide3 from "../../assets/room3.webp";
import slide4 from "../../assets/room5.avif";
import slide5 from "../../assets/room4.webp";

const BannerSlide = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="slider-container mt-2">
        <Slider {...settings}>
          <div className=" p-2 ">
            <img
              className="h-40 w-48 rounded-md bg-white p-1"
              src={slide2.src}
            ></img>
          </div>
          <div className=" p-2">
            <img
              className="h-40 w-48 rounded-md bg-white p-1"
              src={slide1.src}
            ></img>
          </div>
          <div className=" p-2">
            <img
              className="h-40 w-48 rounded-md bg-white p-1"
              src={slide3.src}
            ></img>
          </div>
          <div className=" p-2">
            <img
              className="h-40 w-48 rounded-md bg-white p-1"
              src={slide4.src}
            ></img>
          </div>
          <div className=" p-2">
            <img
              className="h-40 w-48 rounded-md bg-white p-1"
              src={slide5.src}
            ></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlide;
