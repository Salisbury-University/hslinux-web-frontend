import axios from "axios";

export default function () {
  return axios.create({
    baseURL: "http://localhost:3005",
    timeout: 8000,
    headers: {},
  });
}
