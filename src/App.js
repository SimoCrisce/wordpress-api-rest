import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import PostPost from "./components/PostPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/post" element={<PostPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
