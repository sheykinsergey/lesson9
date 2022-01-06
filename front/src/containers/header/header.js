
export function Header({showArticles, showProfile, showAddArticle}){

  return(
      <div>
        <button onClick={showArticles}>articles</button>
        <button onClick={showAddArticle}>addarticle</button>
        <button onClick={showProfile}>profile</button>
      </div>
  );
};