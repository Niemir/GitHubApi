import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as RepoIcon } from "../../assets/images/repo-icon.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";

import {
  Content,
  StyledIcon,
  StyledBio,
  StyledDescription,
  StyledElement,
  StyledInfo,
  StyledTitle,
  StyledDot,
} from "./ListElement.styles";
import { getLangColor } from "../../common/helpers";
import {
  RepoSearchResultItem,
  UserSearchResultItem,
} from "../../models/githubApi";

interface ListElementProps {
  data: any;
}

dayjs.extend(relativeTime as any);

const UserContent = ({ data }: { data: UserSearchResultItem }) => {
  return (
    <>
      <StyledTitle>{data.name ? data.name : data.login}</StyledTitle>
      <StyledDescription>{data.login}</StyledDescription>
      <StyledBio>
        {/* //TODO check why there are missing properties in the user object */}
        {data.bio ? data.bio : "Bio information is missing"}
      </StyledBio>
      <StyledInfo>
        {data.location ? data.location : "Location is missing"}
      </StyledInfo>
    </>
  );
};

const RepoContent = ({ data }: { data: RepoSearchResultItem }) => {
  return (
    <>
      <StyledTitle>{data.full_name}</StyledTitle>
      <StyledDescription addSpacing>{data.description}</StyledDescription>
      <StyledInfo>
        {data?.stargazers_count && (
          <div>
            <Star />
            {data.stargazers_count}
          </div>
        )}
        {data?.language && (
          <div>
            <StyledDot color={getLangColor[data.language.toLowerCase()]} />
            {data?.language}
          </div>
        )}
        {data?.license && <div>{data.license.name}</div>}
        {data?.updated_at && <div> {dayjs(data.updated_at).fromNow()}</div>}
      </StyledInfo>
    </>
  );
};

const ListElement: FC<ListElementProps> = ({ data }) => {
  return (
    <StyledElement>
      <StyledIcon>
        {data.avatar_url ? <img src={data.avatar_url} alt="" /> : <RepoIcon />}
      </StyledIcon>
      <Content>
        {/* <UserContent data={data} /> */}
        <RepoContent data={data} />
      </Content>
    </StyledElement>
  );
};

export default ListElement;
