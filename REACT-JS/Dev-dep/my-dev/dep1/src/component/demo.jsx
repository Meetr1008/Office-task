import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
  headers: { "X-Custom-Header": "foobar" },
});
