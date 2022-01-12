import { Body } from "./containers/body/body";
import { AddArticle } from "./components/addArticle/addArticle";
import { UserPostCon } from "./containers/post/post";
import { UserProfileCon } from "./containers/userProfile/userProfile";
import { PostID } from "./components/postID/postID";
import { PostSTR } from "./components/postID/postSTR";
import { PostFILE } from "./components/postID/postFILE";
import { PostDATA } from "./components/postID/postDATA";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="addArticle" element={<AddArticle />} />
        <Route path="article" element={<UserPostCon />} />
        <Route path="profile" element={<UserProfileCon/>} />
        <Route path="article/:id" element={<PostID />} />
        <Route path="articlestr/:str" element={<PostSTR />} />
        <Route path="articlefile/:file" element={<PostFILE />} />
        <Route path="articledata/:data" element={<PostDATA />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
