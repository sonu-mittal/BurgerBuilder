import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-91a60-default-rtdb.firebaseio.com/",
});

export default instance;
