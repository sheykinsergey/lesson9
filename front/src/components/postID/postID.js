import { useParams } from "react-router-dom";
import { Header } from "../../containers/header/header";

export function PostID(){
  const {id} = useParams();

  return(
    <>
      <Header />
      
      {/* {+id ? <h1>postID id={id}</h1> : <div>incorrect id</div>} */}
      {id.match(/^[0-9]+$/) ? <h1>postID id={id}</h1> : <div>incorrect id</div>}

    </>
  )
}