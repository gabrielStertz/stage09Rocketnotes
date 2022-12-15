import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-epi.onrender.com"
});