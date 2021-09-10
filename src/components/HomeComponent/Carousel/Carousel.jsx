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

const Carousel = ({ arrMoviePopular }) => {
  const history = useHistory();
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  var settings = {
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 4,
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {
    contentCarousel,
    slideCarousel,
    contentPoster,
    iconPlay,
    imgBackDrop,
  } = useStyle();
  return (
    <Fragment>
      <div className={contentCarousel}>
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} fade={true}>
          {arrMoviePopular?.map((banner) => {
            return (
              <div key={banner.id}>
                <img
                  src={`${IMAGE_URL}/${WIDTH_BACKDROP}${banner.backdrop_path}`}
                  alt={banner.backdrop_path}
                  className={imgBackDrop}
                />
              </div>
            );
          })}
        </Slider>

        <div className={slideCarousel}>
          <h1>Popular Movie</h1>
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
          >
            {arrMoviePopular?.map((movie) => {
              return (
                <Fragment key={movie.id}>
                  <div style={{ padding: "30px" }}>
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
