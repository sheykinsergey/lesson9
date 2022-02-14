import  UserProfile  from "../../components/userProfile/userProfile";
import { Header } from "../header/header";
import { useQuery, useMutation } from "react-query";
import { getUser, setEditUser, setAvatar } from "../userProfile/api/crud"
import { useParams } from "react-router-dom";


export function UserProfileCon(){
    const { id } = useParams();
    const { mutate} = useMutation(({data}) => setEditUser(id, data));
    const { mutate: mutateAvatar } = useMutation(({avatar}) => setAvatar(id, avatar)) 
    const { isFetching, data } = useQuery(`profile/${id}`, () => getUser(id));
    const user = data?.data || []

    return(
        <>
            <Header />
            <UserProfile user={user} mutate={mutate} id={id} mutateAvatar={mutateAvatar}/>
        </>
    )

}