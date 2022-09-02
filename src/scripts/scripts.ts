import axios from "axios";
import { marked } from "marked";

const req = async () => {
  axios
    .get("/api/vi/doc/:id")
    .then((res) => {
      console.log(res.data.content);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default req;
//.then capture response
