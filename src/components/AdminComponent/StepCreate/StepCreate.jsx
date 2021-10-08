import { List, ListItem } from "@material-ui/core";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./style";
import clsx from "clsx";

const StepCreate = ({ infoUser, id }) => {
  const { contentList, active, textList, disabled } = useStyle();
  const disabledLink = clsx(textList, disabled);
  return (
    <Fragment>
      <List className={contentList}>
        <ListItem>
          <NavLink
            to={{ pathname: `/${infoUser.username}/list/new` }}
            activeClassName={active}
            className={textList}
            exact={true}
          >
            Step 1 :Create New
          </NavLink>
        </ListItem>
        <ListItem disabled={id ? false : true}>
          <NavLink
            to={{ pathname: `/${infoUser.username}/list/${id}/edit` }}
            className={id ? textList : disabledLink}
            activeClassName={active}
          >
            Step 2 :Add/Edit Items
          </NavLink>
        </ListItem>
        <ListItem disabled={id ? false : true}>
          <NavLink
            to={{ pathname: `/${infoUser.username}/list/${id}/chooseimg` }}
            className={id ? textList : disabledLink}
            activeClassName={active}
          >
            Step 3 :Choose Images
          </NavLink>
        </ListItem>
      </List>
    </Fragment>
  );
};

export default StepCreate;
