
import { getPost, setEditPost } from "../post/api/crud";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import PostIdComponent from "../../components/post/postId";
import { Header } from "../header/header";


const PostIdContainer = () => {
  const { id } = useParams();
  const { mutate} = useMutation(({data}) => setEditPost(id, data));
  const { isFetching, data } = useQuery('posts/${id}', () => getPost(id));
  const post = data?.data || []
  
  return (
    <>
      <Header />
      <PostIdComponent post={post} mutate={mutate} id={id}/>
    </>
  )
}
export default PostIdContainer;