import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";
import NO_AVATAR from "../../../../assets/img_no_avatar.png";

const Credit = ({ detailCredit }) => {
  const { avatar, name, profile, character } = useStyle();
  return (
    <Fragment>
      <Grid container spacing={3}>
        {detailCredit?.cast?.slice(0, 30)?.map((person) => {
          return (
            <Fragment key={person.id}>
              <Grid item xs={6}>
                <div className={profile}>
                  <img
                    src={`${IMAGE_URL}${WIDTH_IMAGE}${person.profile_path}`}
                    alt=""
                    className={avatar}
                    onError={(e) => (e.target.src = NO_AVATAR)}
                  />
                  <div>
                    <Typography variant="body2" className={name}>
                      {person.name}
                    </Typography>
                    <Typography variant="body2" className={character}>
                      {person.character}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Credit;
