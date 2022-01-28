import  PostComponent  from "../../components/post/post";
import { getPosts } from "./api/crud";
import { useQuery } from "react-query";
import { Header } from "../header/header";

    const PostContainer = () => {
        const { isFetching, data } = useQuery('posts', () => getPosts());
        const posts = data?.data || []
        return(
            <>
                {isFetching && <div>Loading...</div>}
                <PostComponent initPost={posts} />
            </>
            
        )
}
export default PostContainer;