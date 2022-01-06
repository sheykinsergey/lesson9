import { Body } from "./containers/body/body";
import { Header } from "./containers/header/header";

import { useState } from "react";

import './App.css';


function App() {

  const [page, setPage] = useState("articles") // default page

  const showArticles = (e) => {
    setPage(e.target.innerHTML) // думаю этот вариант лучше ибо если менять 
                                // название в меню то менять его придется в одном месте
    // setPage("articles")
  }

  const showProfile = (e) => {
    setPage(e.target.innerHTML)
    // setPage("profile")
  }

  const showAddArticle = (e) => {
    setPage(e.target.innerText)
    // setPage("addarticle")
  }

  return (
    <div className="App">

      <header className="App-header">
        <Header showArticles={showArticles} showAddArticle={showAddArticle} showProfile={showProfile} />
      </header>

      <div className="App-body">
        <Body page={page} />
      </div>

    </div>
  );
};
export default App;
