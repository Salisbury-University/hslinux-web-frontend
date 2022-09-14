import axios from "axios";
import http from "../../http";
import { marked } from "marked";

const markdownToHtml = async () => {
  http()
    .get("/api/v1/doc/test")
    .then((res) => {
      console.log(marked.parse(res.data.content));
      return marked.parse(res.data.content);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default markdownToHtml;

//https://medium.com/@dobromir_hristov/reacting-to-promises-from-event-listeners-in-vue-js-8959b6d03f52
