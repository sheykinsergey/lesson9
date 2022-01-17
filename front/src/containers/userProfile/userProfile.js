import  UserProfile  from "../../components/userProfile/userProfile";
import { Header } from "../header/header";

const initUser = {
    firstName: "Vasya",
    lastName: "Pupkin",
    email: "pupkin@gmail.com",
    age: 33,
    avatar: "/img/avatar1.jpg"

}

export function UserProfileCon(){

    return(
        <>
            <Header />
            <UserProfile 
                firstName={initUser.firstName}
                lastName={initUser.lastName}
                email={initUser.email}
                age={initUser.age}
                avatar={initUser.avatar}
            />
        </>
    )

}