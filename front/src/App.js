import { Body } from "./containers/body/body";
import { AddArticle } from "./components/addArticle/addArticle";
import  UserPostCon  from "./containers/post/post";
import { UserProfileCon } from "./containers/userProfile/userProfile";
import { PostID } from "./components/postID/postID";
import { PostSTR } from "./components/postID/postSTR";
import { PostFILE } from "./components/postID/postFILE";
import { PostDATA } from "./components/postID/postDATA";
import { ProfileUserCon } from "./containers/ProfileUser/ProfileUser"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import './App.css';


function App() {
  
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}/>
          <Route path="addArticle" element={<AddArticle />} />
          <Route path="article" element={<UserPostCon />} />
          <Route path="profile" element={<UserProfileCon/>} />
          <Route path="profile/user" element={<ProfileUserCon/>} />
          <Route path="article/:id" element={<PostID />} />
          <Route path="articlestr/:str" element={<PostSTR />} />
          <Route path="articlefile/:file" element={<PostFILE />} />
          <Route path="articledata/:data" element={<PostDATA />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    
  );
};

export default App;
