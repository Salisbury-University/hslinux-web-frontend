import axios from "axios";
import http from "../../http";
import { marked } from "marked";

const markdownToHtml = async () => {
  http()
    .get("/api/v1/doc/test")
    .then((res) => {
      //console.log(marked.parse(res.data.content));
      return marked.parse(res.data.content);
    })
    .catch((error) => {
      console.error(error);
      return "Could not load document";
    });
};

export default markdownToHtml;
