import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Posts = function () {
  const [posts, setPosts] = useState([]);

  useEffect(() => fetchWP(), []);
  const fetchWP = function () {
    fetch("http://localhost/sito2/wordpress/wp-json/wp/v2/posts")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((p) => {
        setPosts(p);
        console.log(p);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={"/posts/" + post.id}>{post.title.rendered}</Link>
          </div>
        );
      })}
    </Container>
  );
};

export default Posts;
