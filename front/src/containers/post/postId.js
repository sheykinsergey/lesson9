
import { getPost, setEditPost } from "../post/api/crud";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import PostIdComponent from "../../components/post/postId";
import { Header } from "../header/header";
import { setUpdateImgPost } from "../../containers/post/api/crud"


const PostIdContainer = () => {
  const { id } = useParams(); //id post
  const { mutate} = useMutation(({data}) => setEditPost(id, data));
  const { mutate: mutateImgPost } = useMutation(({userId, imgPost}) => setUpdateImgPost(userId, imgPost)) 
  const { isFetching, data } = useQuery('posts/${id}', () => getPost(id));
  const post = data?.data || []
  
  return (
    <>
      <Header />
      <PostIdComponent post={post} mutate={mutate} mutateImgPost={mutateImgPost}/>
    </>
  )
}
export default PostIdContainer;