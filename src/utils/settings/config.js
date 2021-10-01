import { createTheme } from "@material-ui/core";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "d6c392186e19bae2e1addaadb1677274";

const IMAGE_URL = "https://image.tmdb.org/t/p/";
const WIDTH_IMAGE = "w300";
const WIDTH_BACKDROP = "w1280";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 768,
      lg: 990,
      xl: 1280,
      xxl: 1400,
    },
  },
});

export { API_URL, API_KEY, IMAGE_URL, WIDTH_IMAGE, WIDTH_BACKDROP, theme };
