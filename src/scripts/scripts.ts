import axios from "axios";
import http from "../../http";
import { marked } from "marked";

const req = async () => {
  http()
    .get("/api/v1/doc/test")
    .then((res) => {
      return marked.parse(res.data.content);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default req;
//.then capture response
