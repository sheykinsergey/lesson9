import { UserPost } from "../../components/post/post";

export function UserPostCon({title, post, publicationDate }){

    return <UserPost title={title} post={post} publicationDate={publicationDate}/>
}