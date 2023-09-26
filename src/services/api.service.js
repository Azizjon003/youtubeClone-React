import axios from "axios";

const Base_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "365d9db32amsh5371ba4d9156705p121220jsn8414d5008112",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${Base_URL}/${url}`, options);

    return response.data;
  },
};
