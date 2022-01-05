import { UserProfile } from "../../components/userProfile/userProfile"

export function UserProfileCon({ firstName, lastName }){
    const fullname = `${firstName} ${lastName}`
    return <UserProfile fullname={fullname}/>

}