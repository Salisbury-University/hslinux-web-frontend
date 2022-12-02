import axios from "axios";

export default function () {
  return axios.create({
    baseURL: "http://localhost:3006",
    timeout: 8000,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJBbGljZSIsImlhdCI6MTY2ODc5MzMzOX0.XzeYKQhTXxBhVVzyrH01LNY2kb_-niJRGJIKI6QiMqw",
    },
  });
}
