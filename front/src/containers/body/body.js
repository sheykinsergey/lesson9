import { UserProfileCon } from "../../containers/userProfile/userProfile";
import { UserPostCon } from "../../containers/post/post";
import { AddArticle } from "../../components/addArticle/addArticle";


export function Body({ page }){

  return(
    <>
      {page == 'articles' && <UserPostCon title="Первый пост" 
                post="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod." 
                publicationDate="30.11.2021" />}
                
      {page == "profile" && <UserProfileCon firstName="vasya" lastName="pupkin" />}

      {page == "addarticle" && <AddArticle />}
    </>
  );
};