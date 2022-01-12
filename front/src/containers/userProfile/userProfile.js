import { UserProfile } from "../../components/userProfile/userProfile";
import { Header } from "../header/header";

const initUser = {
    firstName: "Vasya",
    lastName: "Pupkin",
    email: "pupkin@gmail.com",

}

export function UserProfileCon(){

    return(
        <>
            <Header />
            <UserProfile firstName={initUser.firstName} lastName={initUser.lastName} email={initUser.email}/>
        </>
    )

}