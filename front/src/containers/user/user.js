import UserComponent from "../../components/user/user";
import { Header } from "../header/header";
import { getUserId } from "./api/crud";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const UserContainer = () => {
  const { id } = useParams();
  
  const { isFetching, data } = useQuery('user/${id}', () => getUserId(id));
  const user = data?.data || []

  return (
    <>
      <Header />
      {isFetching && <div>Loading...</div>}
      <UserComponent user={user} />
    </>
  )
}
export default UserContainer;