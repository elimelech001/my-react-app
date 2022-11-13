import React, { useState } from "react";
import './pages/styleUsers.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Album from "./pages/albums";
import Comments from "./pages/Comments";
import Home, { Index } from "./pages/home";
import Info from "./pages/info";
import LogIn from "./pages/logIn";
import Photo from "./pages/photo";
import Posts from "./pages/posts";
import Todos from "./pages/todos";
import Error from "./pages/error";

function UserApp() {
// const [todos ,setTodos]=useState()
// const [albums ,setAlbums]=useState()
// const [posts ,setPosts]=useState()
// const [Comments ,setComments]=useState()
// const [photos ,setPhotos]=useState()
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<LogIn/>}/>
          <Route path="*"  element={<Error/>}/>
          <Route path='/users/:userid' element={<Home/>}>
          <Route index element={<Index />}/>
          <Route path='info' element={<Info />}/>
          <Route path='todos' element={<Todos/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='posts/:postsId/comments' element={<Comments/>}/>
          <Route path='albums' element={<Album/>}/>
          <Route path='albums/:albumId/photos' element={<Photo/>}/>

          </Route>
        </Routes><br />
      </BrowserRouter>
    </>
  );
}

export default UserApp;
