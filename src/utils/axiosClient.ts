import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://api.coingecko.com/api/v3/";

export function getRequest(URL: string) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}
