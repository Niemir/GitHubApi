import { useQuery } from "react-query";
import { githubAxios } from "../common/axios";
import {
  ReposResponseModel,
  UserSearchResultItem,
  UsersResponseModel,
} from "../models/githubApi";

export const useGetAllUsers = (currentName?: string) => {
  return useQuery(
    ["allGithubUsers", currentName],
    async () => {
      const response = await githubAxios.get(
        "/search/users?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users&per_page=4"
      );

      console.log("all users ", response.data.items);

      return response.data as UsersResponseModel;
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
      console.log("all repos ", response.data);
      return response.data as ReposResponseModel;
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
      return response.data as UsersResponseModel;
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

      return response.data as ReposResponseModel;
    },
    {
      enabled: Boolean(currentName),
    }
  );
};

export const useGetSingleUser = (currentName: string) => {
  return useQuery(
    ["githubSingleUser", currentName],
    async () => {
      const response = await githubAxios.get(`/users/${currentName}`);
      return response.data as UserSearchResultItem;
    },
    {
      enabled: Boolean(currentName),
    }
  );
};
