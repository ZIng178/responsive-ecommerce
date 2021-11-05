import axios from "axios";

const BASE_URL = "https://mythicstore.herokuapp.com/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmQ4ODg5ZDY1MzVkMWYwNGRkMzRkMiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzUxMTMyNTIsImV4cCI6MTYzNTM3MjQ1Mn0.rsxlc8taQd_nbvpaB2qSaezBgPaw5zuunMQcAOlYyT4 ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
