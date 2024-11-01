import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:9096",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
