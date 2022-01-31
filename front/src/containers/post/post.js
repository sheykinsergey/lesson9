import  PostComponent  from "../../components/post/post";
import { getPosts } from "./api/crud";
import { useQuery } from "react-query";

    const PostContainer = () => {
        const { isFetching, data } = useQuery('posts', () => getPosts());
        const posts = data?.data || []
        return(
            <>

                <PostComponent initPost={posts} />
            </>
            
        )
}
export default PostContainer;