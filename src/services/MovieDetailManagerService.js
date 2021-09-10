import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class MovieDetailManagerService extends baseService {
  getBannerMovie = (id) => {
    return this.get(`movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
  };
  getPhotosMovie = (id) => {
    return this.get(`movie/${id}/images?api_key=${API_KEY}`);
  };
  getCreditMovie = (id) => {
    return this.get(`movie/${id}/credits?api_key=${API_KEY}&language=vi-VN`);
  };
  getSimilarMovie = (id) => {
    return this.get(
      `movie/${id}/similar?api_key=${API_KEY}&language=vi-VN&page=1`
    );
  };
  getReviewsMovie = (id) => {
    return this.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
  };

  getRecommendMovie = (id) => {
    return this.get(
      `movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    );
  };
}
export const detailManager = new MovieDetailManagerService();
