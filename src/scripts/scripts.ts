import axios from "axios";

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

export default req;
//.then capture response
