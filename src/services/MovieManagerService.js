import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class MovieManagerService extends baseService {
  getMoviePopular = (page) => {
    return this.get(
      `movie/popular?api_key=${API_KEY}&language=vi-VN&page=${page}`
    );
  };

  getMovieTopRate = (page) => {
    return this.get(
      `movie/top_rated?api_key=${API_KEY}&language=vi-VN&page=${page}`
    );
  };
  getMovieNowPlaying = (page) => {
    return this.get(
      `movie/now_playing?api_key=${API_KEY}&language=vi-VN&page=${page}`
    );
  };
  getMovieUpComing = (page) => {
    return this.get(
      `movie/upcoming?api_key=${API_KEY}&language=vi-VN&page=${page}`
    );
  };

  getKeyTrailerPopular = (id) => {
    return this.get(`movie/${id}/videos?api_key=${API_KEY}`);
  };

  getTVShowTopRate = (page) => {
    return this.get(
      `tv/top_rated?api_key=${API_KEY}&language=vi-VN&page=${page}`
    );
  };

  getGenresMovieList = () => {
    return this.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`);
  };

  getMovieList = (
    page,
    releaseDateGte,
    releaseDateLte,
    rategte,
    ratelte,
    genre,
    language
  ) => {
    if (
      page ||
      releaseDateGte ||
      releaseDateLte ||
      rategte ||
      ratelte ||
      genre ||
      language
    )
      return this.get(
        `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&release_date.gte=${releaseDateGte}&release_date.lte=${releaseDateLte}&vote_average.gte=${rategte}&vote_average.lte=${ratelte}&with_genres=${genre}&with_original_language=${language}`
      );
  };

  getGenresTVShowList = () => {
    return this.get(`genre/tv/list?api_key=${API_KEY}&language=en-US`);
  };

  getTVShowList = (
    page,
    releaseDateGte,
    releaseDateLte,
    rategte,
    ratelte,
    genre,
    language
  ) => {
    if (
      page ||
      releaseDateGte ||
      releaseDateLte ||
      rategte ||
      ratelte ||
      genre ||
      language
    ) {
      return this.get(
        `discover/tv?api_key=${API_KEY}&language=en-US&page=${page}&first_air_date.gte=${releaseDateGte}&first_air_date.lte=${releaseDateLte}&vote_average.gte=${rategte}&vote_average.lte=${ratelte}&with_genres=${genre}&with_original_language=${language}`
      );
    }
    return;
  };
}

export const movieManager = new MovieManagerService();
