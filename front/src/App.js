import { Body } from "./containers/body/body";
import { Header } from "./containers/header/header";

import { useState } from "react";

import './App.css';


function App() {

  const [page, setPage] = useState("articles") // default page

  const showArticles = () => {
    setPage("articles")
  }

  const showProfile = () => {
    setPage("profile")
  }

  const showAddArticle = () => {
    setPage("addarticle")
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
