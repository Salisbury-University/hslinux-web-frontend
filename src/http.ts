import axios from "axios";
// import { useAuthStore } from "../stores/auth.ts";

// const storer = uuseAuth

export default function () {
  return axios.create({
    baseURL: "http://localhost:3005", // TODO - Trying to figure out how to access this from the pinia store
    // baseURL: env.VITE_BASEURL,
    timeout: 8000,
    headers: {
      Authorization: "",
    },
  });
}
