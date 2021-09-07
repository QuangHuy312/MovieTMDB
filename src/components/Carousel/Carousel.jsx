import { Modal } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import React, { Fragment, memo, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getKeyTrailerAction } from "../../redux/action/MovieManagerAction";
import { IMAGE_URL, WIDTH_IMAGE } from "../../utils/settings/config";
import useStyle from "./style";

const Carousel = ({ arrMoviePopular }) => {
  const dispatch = useDispatch();
  const { trailerMoviePopular } = useSelector(
    (state) => state.MovieManagerReducer
  );
  const [open, setOpen] = useState(false);
  const handleClickTrailer = useCallback(
    (id) => {
      setOpen(true);
      dispatch(getKeyTrailerAction(id));
    },
    [open, dispatch]
  );

  var settings = {
    position: "relative",
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: 4,
    autoplay: true,
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
  const handleClose = () => {
    setOpen(false);
  };

  const {
    contentCarousel,
    slideCarousel,
    backDrop,
    contentPoster,
    iconPlay,
    trailer,
  } = useStyle();
  return (
    <div className={contentCarousel}>
      <div className={backDrop}>
        <img
          src="https://image.tmdb.org/t/p/w1280/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg"
          alt=""
        />
      </div>
      <div className={slideCarousel}>
        <h1>Movie Popular</h1>
        <Slider {...settings}>
          {arrMoviePopular?.map((movie) => {
            return (
              <Fragment key={movie.id}>
                <div style={{ padding: "30px" }}>
                  <div className={contentPoster}>
                    <img
                      src={`${IMAGE_URL}/${WIDTH_IMAGE}${movie.poster_path}`}
                      alt={movie.poster_path}
                    />
                    <PlayCircleOutlineIcon
                      className={iconPlay}
                      onClick={() => {
                        handleClickTrailer(movie.id);
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={trailer}>
              {trailerMoviePopular ? (
                <ReactPlayer
                  playing={true}
                  controls={true}
                  width="100%"
                  height="450px"
                  url={`https://www.youtube.com/watch?v=${trailerMoviePopular[0]?.key}`}
                />
              ) : null}
            </div>
          </Modal>
        </Slider>
      </div>
    </div>
  );
};

export default memo(Carousel);
