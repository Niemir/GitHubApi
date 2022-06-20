import { useQuery } from "react-query";
import { githubAxios } from "../common/axios";
import {
  ReposResponseModel,
  UserSearchResultItem,
  UsersResponseModel,
} from "../models/githubApi";

export const useGetAllUsers = (currentName?: string) => {
  return useQuery(["allGithubUsers", currentName], async () => {
    const popularUsers =
      "q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users";
    const usersByName = `q=${currentName}`;
    const response = await githubAxios.get(
      `/search/users?${currentName ? usersByName : popularUsers}&per_page=4`
    );
    return response.data as UsersResponseModel;
  });
};

export const useGetAllRepos = (currentName?: string) => {
  return useQuery(["allGithubRepos", currentName], async () => {
    const popularRepos = "q=stars:%3E1&sort=stars";
    const reposByName = `q=${currentName}`;
    const response = await githubAxios.get(
      `/search/repositories?${
        currentName ? reposByName : popularRepos
      }&per_page=5`
    );
    return response.data as ReposResponseModel;
  });
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
