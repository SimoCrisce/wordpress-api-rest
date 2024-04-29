import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PostPost = function () {
  const [form, setForm] = useState({
    title: "",
    status: "publish",
  });
  const postArticle = function () {
    fetch("http://localhost/sito2/wordpress/wp-json/wp/v2/posts/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("simone:deUa DcRL UbBk JsAf SspL zwdB"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .catch();
  };
  //richiesta POST al momento non funzionante
  const handleSubmit = function (e) {
    e.preventdefault();
    postArticle(form);
  };
  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="title">Titolo</Form.Label>
              <Form.Control
                id="title"
                type="text"
                placeholder="Inserisci titolo"
                onChange={(e) =>
                  setForm((state) => ({
                    ...state,
                    title: e.target.value,
                  }))
                }
                value={form.title}
              />
            </Form.Group>
          </Col>
          <Col xs={12}></Col>
          <Button type="submit">Pubblica</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default PostPost;
