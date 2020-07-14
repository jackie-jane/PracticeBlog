import axios from "axios";

let apiURL;

const apiUrls = {
  production: "https://practiceblogorange.herokuapp.com/api/blogs",
  developement: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
