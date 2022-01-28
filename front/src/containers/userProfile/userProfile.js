import  UserProfile  from "../../components/userProfile/userProfile";
import { Header } from "../header/header";
import { useQuery } from "react-query";
import { getUser } from "../userProfile/api/crud"


export function UserProfileCon(){
    const { isFetching, data } = useQuery('users/8', () => getUser(8));
    const user = data?.data || []

    return(
        <>
            <Header />
            {isFetching && <div>Loading...</div>}
            <UserProfile user={user}/>
        </>
    )

}