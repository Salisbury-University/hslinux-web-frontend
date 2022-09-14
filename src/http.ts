import axios from "axios";

export default function () {
  return axios.create({
    baseURL: "http://localhost:3005", // TODO - Trying to figure out how to access this from the pinia store
    timeout: 8000,
    headers: {
      Authorization: "",
    },
  });
}
