import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

const SinglePost = function () {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => fetchPost(), [params.id]);
  const fetchPost = function () {
    fetch("http://localhost/sito2/wordpress/wp-json/wp/v2/posts/" + params.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((singlePost) => {
        setPost(singlePost);
        console.log(singlePost);
      })
      .catch((error) => console.log(error));
  };
  return (
    post && (
      <Container>
        <h1>{post.title.rendered}</h1>
        <img src={post._links} alt="" />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </Container>
    )
  );
};

export default SinglePost;
