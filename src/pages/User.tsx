import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledInfo } from "../components/ListElement/ListElement.styles";
import { useGetSingleUser } from "../hooks/github.hooks";
import { ReactComponent as FollowersIcon } from "../assets/images/followers.svg";
import { ReactComponent as StarIcon } from "../assets/images/star.svg";

const Wrapper = styled.section`
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled.div`
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 296px;
    height: 296px;
    border-radius: 50%;
  }
`;
const StyledName = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 5px;
`;
const StyledLogin = styled.h2`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 2px;
`;
const StyledDetails = styled(StyledInfo)`
  margin-top: 13px;
`;

const User = () => {
  let { userLogin } = useParams();

  const {
    data: user,
    isLoading,
    isError,
  } = useGetSingleUser(userLogin ? userLogin : "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !user) {
    return <div>User not found</div>;
  }

  console.log(user);
  return (
    <Wrapper>
      <StyledImage>
        {user?.avatar_url && <img src={user.avatar_url} alt="" />}
      </StyledImage>
      {user?.name && <StyledName>{user.name}</StyledName>}
      {user?.login && <StyledLogin>{user.login}</StyledLogin>}

      <StyledDetails>
        {user?.followers ? (
          <div>
            <FollowersIcon />
            {user.followers}
          </div>
        ) : null}
        {user?.following ? <div>{user.following} Following</div> : null}
        {user?.followers ? (
          <div>
            <StarIcon />-{/* TODO add stars count */}
          </div>
        ) : null}
      </StyledDetails>
    </Wrapper>
  );
};

export default User;
