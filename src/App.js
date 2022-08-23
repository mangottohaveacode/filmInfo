import React, { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

function App() {
  const [movies, setMovies] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=241f0217e9c472fb9c79403a511201bc";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Navbar bg="dark" exapn="ig" variant="dark">
        <Container fluid>
          <Navbar.Brand href="">MovieDB App</Navbar.Brand>
          <Navbar.Brand href="">Trending</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-3"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Movie Search"
                  className="me-2"
                  aria-label="search"
                  name=""
                ></FormControl>
                <Button variant="secondary" type="submit">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Container>
      </Navbar>
      <div className="container">
        <div className="grid">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
