import req from "./scripts";
const marked = require("marked");

function getMarked() {
  return marked.parse(req);
}

export default getMarked;
