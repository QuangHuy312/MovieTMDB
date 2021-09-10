import {
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "./style";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";

const TVShow = ({ arrTVShow }) => {
  const history = useHistory();
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className={arrowContentNext} onClick={onClick}>
        <ArrowForwardIosIcon className={arrowImage} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={arrowContent} onClick={onClick}>
        <ArrowBackIosOutlinedIcon className={arrowImage} />
      </div>
    );
  }
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const {
    content,
    arrowImage,
    contentMedia,
    arrowContentPrev,
    arrowContentNext,
    card,
    hoverContent,
    hoverButton,
    title,
  } = useStyle();
  const arrowContent = clsx(arrowContentPrev, arrowContentNext);
  return (
    <Container className={content}>
      <Typography variant="h4" component="h1" className={title}>
        TV SHOW
      </Typography>
      <div style={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SubdirectoryArrowRightOutlinedIcon />}
          style={{ borderRadius: 10 }}
          onClick={() => history.push("/tvshow/all")}
        >
          View All
        </Button>
      </div>
      <Slider {...settings} style={{ padding: 40 }}>
        {arrTVShow?.slice(0, 15)?.map((tvshow) => {
          return (
            <Card className={card}>
              <CardMedia
                className={contentMedia}
                image={`${IMAGE_URL}${WIDTH_IMAGE}${tvshow.poster_path}`}
              >
                <div className={hoverContent}>
                  <Button
                    onClick={() => history.push(`/detailTVshow/${tvshow.id}`)}
                    className={hoverButton}
                  >
                    Watching Now
                  </Button>
                </div>
              </CardMedia>
            </Card>
          );
        })}
      </Slider>
    </Container>
  );
};

export default TVShow;
