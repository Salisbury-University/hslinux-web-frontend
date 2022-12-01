import axios from "axios";

export default function () {
  return axios.create({
    baseURL: "http://localhost:3006",
    timeout: 8000,
    headers: {
      Authorization: "",
    },
  });
}
