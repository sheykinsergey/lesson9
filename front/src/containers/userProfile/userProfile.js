import { UserProfile } from "../../components/userProfile/userProfile"

const initUser = {
    firstName: "Vasya",
    lastName: "Pupkin",
    email: "pupkin@gmail.com",

}

export function UserProfileCon(){

    return <UserProfile firstName={initUser.firstName} lastName={initUser.lastName} email={initUser.email}/>

}