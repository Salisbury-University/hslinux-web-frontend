import axios from "axios";
//const marked = require('marked');

const req = async () => {
  axios
    .get("/api/vi/doc/:id")
    .then((res) => {
      return marked.parse(res.data.content);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default req;
//.then capture response
