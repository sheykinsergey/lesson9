import  UserProfile  from "../../components/userProfile/userProfile";
import { Header } from "../header/header";
import { useQuery } from "react-query";
import { getUser } from "../userProfile/api/crud"
import { useParams } from "react-router-dom";


export function UserProfileCon(){
    const { id } = useParams();
    const { isFetching, data } = useQuery('profile/${id}', () => getUser(id));
    const user = data?.data || []

    return(
        <>
            <Header />
            <UserProfile user={user}/>
        </>
    )

}