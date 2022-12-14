import axios from "axios";

class NftDataService {
  getAll(page = 0) {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts?page=${page}`
    );
  }

  getMostLiked() {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/most-liked`
    );
  }

  find(query, by = "name", page = 0) {
    if (by === "name") {
      return axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts?name=${query}&page=${page}`
      );
    } else if (by === "id") {
      return axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/id/${query}`
      );
    } else if (by === "genre") {
      return axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts?genre=${query}&page=${page}`
      );
    }
  }

  getGenres() {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/genres`
    );
  }

  updateLikes(data) {
    return axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/likes`,
      data
    );
  }

  getRandomNfts(num) {
    return axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/random?num=${num}`
    );
  }

  mintNft(data) {
    return axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/mint`,
      data
    );
  }

  sellNft(data) {
    return axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/sell`,
      data
    );
  }

  buyNft(data) {
    return axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/api/v1/nfts/buy`,
      data
    );
  }

}

export default new NftDataService();
