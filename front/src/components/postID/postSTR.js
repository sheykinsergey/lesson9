import { useParams } from "react-router-dom";
import { Header } from "../../containers/header/header";

export function PostSTR(){
  const {str} = useParams();

  return(
    <>
      <Header />
      
      {str.match(/^[A-Z]+$/) ? <h1>postSTR str={str}</h1> : <div>incorrect str</div>}

    </>
  )
}