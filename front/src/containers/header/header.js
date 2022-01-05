
export function Header({showArticles, showProfile, showAddArticle}){

  return(
      <div>
        <button onClick={showArticles}>article</button>
        <button onClick={showAddArticle}>addarticle</button>
        <button onClick={showProfile}>profile</button>
      </div>
  );
};