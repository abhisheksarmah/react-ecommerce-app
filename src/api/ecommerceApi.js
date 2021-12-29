import axios from "axios";
const baseURL = "https://fakestoreapi.com";
export default axios.create({
  baseURL,
});
