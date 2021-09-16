import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import NO_AVATAR from "../../../../assets/img_no_avatar.png";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";

const Reviews = ({ reviews }) => {
  const { imgUser, content, createTime, rating, btnShowText } = useStyle();
  const [comment, setComment] = useState(false);
  return (
    <Fragment>
      <div className={content}>
        <div style={{ display: "flex" }}>
          <img
            src={`${IMAGE_URL}${WIDTH_IMAGE}${reviews.author_details.avatar_path}`}
            alt="avatar"
            className={imgUser}
            onError={(e) => (e.target.src = NO_AVATAR)}
          />
          <div style={{ paddingLeft: 15 }}>
            <div>
              {comment ? (
                <Typography variant="body2" component="span">
                  {reviews.content}
                </Typography>
              ) : (
                <Typography variant="body2" component="span">
                  {reviews.content.substr(0, 200)}
                </Typography>
              )}
              <Typography
                variant="body"
                component="span"
                onClick={() => {
                  setComment(!comment);
                }}
                className={btnShowText}
              >
                {comment ? "Show Less" : "Read More"}
              </Typography>
            </div>
            <Typography variant="body" className={createTime}>
              {reviews.created_at} by {reviews.author}
            </Typography>
          </div>
        </div>
        <div>
          <Typography variant="h2" className={rating}>
            {reviews.author_details.rating || 8}
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default Reviews;
