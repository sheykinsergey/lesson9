import { useParams } from "react-router-dom";
import { Header } from "../../containers/header/header";

export function PostDATA(){
  const {data} = useParams();

  const date = new Date()

  const getDate = new Date(data)


  return(
    <>
      <Header />
      
      {data.match(/^[0-9]{4}-[0-2]{2}-[0-9]{2}$/) && getDate.getTime() < date.getTime() ? <h1>postDATA data={data}</h1> : <div>incorrect DATA</div>}

    </>
  )
}