import { Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

import useStyle from "./style";

const NotFound = () => {
  const { content } = useStyle();
  const history = useHistory();
  return (
    <div className={content}>
      <Typography variant="h3">Bạn đi lạc à ?</Typography>
      <Typography variant="h6" style={{ padding: "30px 0" }}>
        Rất tiếc chúng tôi không tìm thấy trang đó , vui lòng về Home để tìm
        kiếm
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
