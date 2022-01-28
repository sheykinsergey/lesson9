
import { getPost } from "../post/api/crud";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PostIdComponent from "../../components/post/postId";
import { Header } from "../header/header";


const PostIdContainer = () => {
  const { id } = useParams();
  const { isFetching, data } = useQuery('posts/${id}', () => getPost(id));
  const post = data?.data || []
  return (
    <>
      <Header />
      {isFetching && <div>Loading...</div>}
      <PostIdComponent post={post} />
    </>
  )
}
export default PostIdContainer;