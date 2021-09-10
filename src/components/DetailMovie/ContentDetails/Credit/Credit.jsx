import { Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { IMAGE_URL, WIDTH_IMAGE } from "../../../../utils/settings/config";
import useStyle from "./style";
import { NO_AVATAR } from "../../../../assets/logo";

const Credit = ({ detailCredit }) => {
  const { avatar, name, profile, character } = useStyle();
  return (
    <Fragment>
      <Grid container spacing={4}>
        {detailCredit?.cast?.slice(0, 30)?.map((person) => {
          return (
            <Grid item xs={12} md={6}>
              <div className={profile}>
                <img
                  src={`${IMAGE_URL}${WIDTH_IMAGE}${person.profile_path}`}
                  alt=""
                  className={avatar}
                  onError={(e) => (e.target.src = `${NO_AVATAR}`)}
                />
                <div style={{ padding: 20 }}>
                  <Typography variant="body2" className={name}>
                    {person.name}
                  </Typography>
                  <Typography variant="body2" className={character}>
                    {person.character}
                  </Typography>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Credit;
