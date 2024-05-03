import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <br />
        <br />
        <title>Whoops! Page not found</title>
        <h1>Page not found</h1>
        <br />
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
        </p>
        <h3>
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Please go back to all episodes <Link to="/">here</Link>.
              <br />
            </>
          ) : null}
          <br />
        </h3>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
