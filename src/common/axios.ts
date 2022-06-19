import axios from "axios";

export const githubAxios = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    Accept: `application/vnd.github.v3+json`,
  },
});
