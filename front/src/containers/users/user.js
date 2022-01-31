import UserComponent from "../../components/user/user";
import { Header } from "../header/header";
import { getUser } from "../users/api/crud";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";



const UserContainer = () => {
  const { id } = useParams();
  
  const { isFetching, data } = useQuery('user/${id}', () => getUser(id));
  const user = data?.data || []

  return (
    <>
      <Header />

      <UserComponent user={user} />
    </>
  )
}
export default UserContainer;