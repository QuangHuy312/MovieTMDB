import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class MovieManagerService extends baseService {
  getMoviePopular = (page) => {
    return this.get(
      `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  };

  getMovieTopRate = (page) => {
    return this.get(
      `movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  };
  getMovieNowPlaying = (page) => {
    return this.get(
      `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  };
  getMovieUpComing = (page) => {
    return this.get(
      `movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  };

  getKeyTrailerPopular = (id) => {
    return this.get(`movie/${id}/videos?api_key=${API_KEY}`);
  };

  getTVShow = (page) => {
    return this.get(
      `tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    );
  };
}

export const movieManager = new MovieManagerService();
