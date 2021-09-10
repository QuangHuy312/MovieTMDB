import { API_KEY } from "../utils/settings/config";
import { baseService } from "./baseService";

export class TvShowDetailManagerService extends baseService {
  getBannerTvShow = (id) => {
    return this.get(`tv/${id}?api_key=${API_KEY}&append_to_response=videos`);
  };
  getPhotosTvShow = (id) => {
    return this.get(`tv/${id}/images?api_key=${API_KEY}`);
  };
  getCreditTvShow = (id) => {
    return this.get(`tv/${id}/credits?api_key=${API_KEY}&language=vi-VN`);
  };
  getSimilarTvShow = (id) => {
    return this.get(
      `tv/${id}/similar?api_key=${API_KEY}&language=vi-VN&page=1`
    );
  };
  getReviewsTvShow = (id) => {
    return this.get(
      `tv/${id}/reviews?api_key=${API_KEY}&language=vi-VN&page=1`
    );
  };

  getRecommendTVShow = (id) => {
    return this.get(
      `tv/${id}/recommendations?api_key=${API_KEY}&language=vi-VN&page=1`
    );
  };
}
export const detailManager = new TvShowDetailManagerService();
