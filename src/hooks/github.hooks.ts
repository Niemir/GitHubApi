import { useQuery } from "react-query";
import { githubAxios } from "../common/axios";
import { ReposResponseModel, UsersResponseModel } from "../models/githubApi";

export const useGetAllUsers = (currentName?: string) => {
  return useQuery(
    ["allGithubUsers", currentName],
    async () => {
      const response = await githubAxios.get(
        "/search/users?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users&per_page=4"
      );

      console.log("all users ", response.data.items);

      const templeGameResultsResponse: UsersResponseModel = response.data;
      return templeGameResultsResponse.items;
    },
    {
      enabled: !Boolean(currentName),
    }
  );
};
export const useGetAllRepos = (currentName?: string) => {
  return useQuery(
    ["allGithubRepos", currentName],
    async () => {
      console.log("get all repos");
      const response = await githubAxios.get(
        "/search/repositories?q=stars:%3E1&sort=stars&per_page=5"
      );
      console.log("all repos ", response.data.items);

      const templeGameResultsResponse: ReposResponseModel = response.data;
      return templeGameResultsResponse.items;
    },
    {
      enabled: !Boolean(currentName),
    }
  );
};

export const useGetUserByName = (currentName: string) => {
  return useQuery(
    ["githubUser", currentName],
    async () => {
      const response = await githubAxios.get(`/search/users?q=${currentName}`);
      const templeGameResultsResponse: UsersResponseModel = response.data;
      console.log("by name  users ", response.data.items);

      return templeGameResultsResponse.items;
    },
    {
      enabled: Boolean(currentName),
    }
  );
};

export const useGetReposByName = (currentName: string) => {
  return useQuery(
    ["githubRepos", currentName],
    async () => {
      const response = await githubAxios.get(
        `/search/repositories?q=${currentName}`
      );
      const templeGameResultsResponse: ReposResponseModel = response.data;
      console.log("by name repos ", response.data.items);

      return templeGameResultsResponse.items;
    },
    {
      enabled: Boolean(currentName),
    }
  );
};
