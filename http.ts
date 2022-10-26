import axios from "axios";
// import { useAuthStore } from './stores/auth'

// const store = useAuthStore();

export default function () {
  return axios.create({
    baseURL: "http://localhost:3006",
    timeout: 8000,
    headers: {
      Authorization: "",
    },
  });
}
