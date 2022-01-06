import { UserProfileCon } from "../../containers/userProfile/userProfile";
import { UserPostCon } from "../../containers/post/post";
import { AddArticle } from "../../components/addArticle/addArticle";

export function Body({ page }){

  return(
    <>
      {page == 'articles' && <UserPostCon />}

      {page == "profile" && <UserProfileCon />}

      {page == "addarticle" && <AddArticle />}
    </>
  );
};