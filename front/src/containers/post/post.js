import  PostComponent  from "../../components/post/post";
import { Header } from "../header/header";
import { getPosts } from "./api/crud";
import { useQuery } from "react-query";

    const PostContainer = () => {
        const { isFetching, data } = useQuery('posts', () => getPosts());
        const posts = data?.data || []
        return(
            <>
                <Header />
                {isFetching && <div>Loading...</div>}
                <PostComponent initPost={posts} />
            </>
            
        )
}
export default PostContainer;