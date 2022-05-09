import axios from "axios";
const { marked } = require("marked");

const req = async () => {
  axios
    .get("/api/vi/doc/:id")
    .then((res) => {
      return res.data.content;
    })
    .catch((error) => {
      console.error(error);
    });
};

function getMarkdownn() {
  document.getElementById("marked")?.innerHTML = marked.parse(req);
}

export default req;
//.then capture response
