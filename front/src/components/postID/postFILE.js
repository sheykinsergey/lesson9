import { useParams } from "react-router-dom";
import { Header } from "../../containers/header/header";

export function PostFILE(){
  const {file} = useParams();

  return(
    <>
      <Header />
      
      {file.match(/^[0-9а-яА-Яa-zA-Z]+\.(doc|pdf|jpeg)$/) ? <h1>postFILE file={file}</h1> : <div>incorrect file</div>}

    </>
  )
}