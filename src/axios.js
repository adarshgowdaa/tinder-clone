import axios from "axios";

const instance = axios.create({
  baseURL: "https://<backend-url>",
});

export default instance;
