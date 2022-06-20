import { useParams } from "react-router-dom";
import { useGetUserByName } from "../hooks/github.hooks";

const User = () => {
  let { userLogin } = useParams();
  const { data, isLoading, isError } = useGetUserByName(`user:${userLogin}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <div></div>;
};

export default User;
