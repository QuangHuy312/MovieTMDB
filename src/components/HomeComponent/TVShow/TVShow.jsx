import {
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SubdirectoryArrowRightOutlinedIcon from "@material-ui/icons/SubdirectoryArrowRightOutlined";
import React from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../utils/settings/config";
import useStyle from "./style";

const TVShow = ({ arrTVShowTopRated }) => {
  const history = useHistory();
  const {
    content,
    contentMedia,
    card,
    hoverContent,
    hoverButton,
    title,
    btnViewAll,
    slider,
  } = useStyle();
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
      <ArrowBackIosOutlinedIcon
        className={className}
        style={{ ...style, color: "#fff", display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl" className={content}>
      <div className={title}>
        <Typography variant="h4">TV SHOW</Typography>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SubdirectoryArrowRightOutlinedIcon />}
          className={btnViewAll}
          onClick={() => history.push("/tvshow/list")}
        >
          View All
        </Button>
      </div>
      <Slider {...settings} className={slider}>
        {arrTVShowTopRated?.slice(0, 15)?.map((tvshow) => {
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
