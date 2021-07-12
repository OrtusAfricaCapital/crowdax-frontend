import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8000/api/v1/",
  //headers: { Authorization: "Bearer " + "558ef74464db500e6129ea4843af4a43" },

  baseURL: "https://chatranslator.com/api/v1/",
  headers: { Authorization: "Bearer " + "3f02a768b44c963ac371e151e3589733" },

});
