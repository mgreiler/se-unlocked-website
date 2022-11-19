import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";import { Container } from "react-bootstrap";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
    <Container>
      <title>Page not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Go back to all episodes <a href="https://www.software-engineering-unlocked.com/">here</a>
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
      </Container>
      </Layout>
  );
};

export default NotFoundPage;
