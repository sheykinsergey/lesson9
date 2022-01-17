import  UserPost  from "../../components/post/post";
import { Header } from "../header/header";

    const initPost = [
        {
        title: "first post",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.",
        publicationDate: "30.11.2021"
        },
        {
        title: "two post",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.",
        publicationDate: "30.11.2021"
        },  
    ]

    const UserPostCon = () => {

    return(
        <>
            <Header />

                <UserPost initPost={initPost} />
            
        </>
        
    )
}
export default UserPostCon;