import axios from "axios";

const instance = axios.create({
  baseURL: "https://oggustowp.bomajans.site/wp-json/wp/v2",
});

export default instance;
