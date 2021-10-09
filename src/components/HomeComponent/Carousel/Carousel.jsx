import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import React, { Fragment, memo } from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import {
  IMAGE_URL,
  WIDTH_BACKDROP,
  WIDTH_IMAGE,
} from "../../../utils/settings/config";
import useStyle from "./style";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Typography } from "@material-ui/core";

const Carousel = ({ arrMoviePopular }) => {
  const history = useHistory();
  const {
    contentCarousel,
    slideCarousel,
    contentPoster,
    iconPlay,
    imgBackDrop,
  } = useStyle();
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        className={className}
        style={{ ...style, color: "#fff", display: "block" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosIcon
        className={className}
        style={{ ...style, color: "#fff", display: "block" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3.5,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    ],
  };

  return (
    <Fragment>
      <div className={contentCarousel}>
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} fade={true}>
          {arrMoviePopular?.map((banner) => {
            return (
              <Fragment key={banner.id}>
                <img
                  src={`${IMAGE_URL}/${WIDTH_BACKDROP}${banner.backdrop_path}`}
                  alt={banner.backdrop_path}
                  className={imgBackDrop}
                />
              </Fragment>
            );
          })}
        </Slider>

        <div className={slideCarousel}>
          <Typography variant="h4">Popular Movie</Typography>
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
          >
            {arrMoviePopular?.map((movie) => {
              return (
                <Fragment key={movie.id}>
                  <div className={contentPoster}>
                    <img
                      src={`${IMAGE_URL}/${WIDTH_IMAGE}${movie.poster_path}`}
                      alt={movie.poster_path}
                    />
                    <ArrowRightAltIcon
                      className={iconPlay}
                      onClick={() => {
                        history.push(`/detailmovies/${movie.id}`);
                      }}
                    />
                  </div>
                </Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Carousel);
