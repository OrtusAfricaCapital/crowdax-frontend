import axios from "axios";

export default axios.create({
  baseURL: "https://crowdaxconnect.herokuapp.com/api/v1/",
  headers: { Authorization: "Bearer " + "1ed5b05e77a01c91798385ddf756156e" },
});
