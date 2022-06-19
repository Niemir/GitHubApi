import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as RepoIcon } from "../../assets/images/repo-icon.svg";

interface ListElementProps {
  user: any;
}

const StyledElement = styled.li`
  display: flex;
  padding: 20px 0 16px;
  &:not(:last-child) {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  }
`;
const Icon = styled.div`
  flex-shrink: 0;
  margin-right: 8px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
const Content = styled.div``;
const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: 500;
  line-height: 1.5;
`;
const StyledDescription = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.m};
  font-weight: 500;
  line-height: 1.5;
`;
const StyledBio = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.s};
  font-weight: 500;
  line-height: 1.28;
  margin: 20px 0 8px;
`;
const StyledInfo = styled.div`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 500;
  line-height: 1.33;
`;

const ListElement: FC<ListElementProps> = ({ user }) => {
  console.log(user);
  return (
    <StyledElement>
      <Icon>
        {user.avatar_url ? <img src={user.avatar_url} alt="" /> : <RepoIcon />}
      </Icon>
      <Content>
        <StyledTitle>{user.name ? user.name : user.login}</StyledTitle>
        <StyledDescription>{user.login}</StyledDescription>
        <StyledBio>
          {/* //TODO check why there are missing properties in the user object */}
          {user.bio ? user.bio : "Bio information is missing"}
        </StyledBio>
        <StyledInfo>
          {user.location ? user.location : "Location is missing"}
        </StyledInfo>
      </Content>
    </StyledElement>
  );
};

export default ListElement;
