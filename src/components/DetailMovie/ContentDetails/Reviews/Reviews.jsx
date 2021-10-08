import { Box, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";

import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const Reviews = ({ reviews }) => {
  const { imgUser, content, createTime, rating, btnShowText, textReviews } =
    useStyle();
  const [comment, setComment] = useState(false);
  return (
    <Fragment>
      <Box className={content}>
        <Box display="flex">
          <img
            src={`${IMAGE_URL}${WIDTH_IMAGE}${reviews.author_details.avatar_path}`}
            alt="avatar"
            className={imgUser}
            onError={(e) =>
              (e.target.src = `https://i.pravatar.cc/300?u=${reviews.id}`)
            }
          />
          <Box>
            <Box>
              {comment ? (
                <Typography variant="span" className={textReviews}>
                  {reviews.content}
                </Typography>
              ) : (
                <Typography variant="span" className={textReviews}>
                  {reviews.content.substr(0, 200)}
                </Typography>
              )}
              <Typography
                variant="span"
                onClick={() => {
                  setComment(!comment);
                }}
                className={btnShowText}
              >
                {comment ? "Show Less" : "Read More"}
              </Typography>
            </Box>

            <Typography variant="span" className={createTime}>
              {reviews.created_at} by {reviews.author}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h2" className={rating}>
            {reviews.author_details.rating || 8}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Reviews;
