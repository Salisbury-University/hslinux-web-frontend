import axios from "axios";
import http from "../../http";
import { marked } from "marked";

const req = async () => {
  axios
    .get("/api/v1/doc/:id")
    .then((res) => {
      console.log(marked.parse(res.data.content));
    })
    .catch((error) => {
      console.error(error);
    });
};

export default req;
//.then capture response
