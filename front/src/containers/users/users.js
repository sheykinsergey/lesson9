import UsersComponent from "../../components/users/users";
import { Header } from "../header/header";
import { getUsers } from "./api/crud";
import { useQuery } from "react-query";

const UsersContainer = () => {
  const { isFetching, refetch, data } = useQuery('users', () => getUsers());
  const users = data?.data || []
  return (
    <>
      <Header />
      {isFetching && <div>Loading...</div>}
      <UsersComponent initUsers={users}/>
    </>
    
  )
}
export default UsersContainer;
