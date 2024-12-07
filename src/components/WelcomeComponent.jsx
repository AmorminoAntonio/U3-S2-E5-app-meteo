import { Button, Col, Container, Row } from "react-bootstrap";
import { EmojiSmileFill, EmojiSmileUpsideDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const WelcomeComponent = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <h1 className="display-1">
          <EmojiSmileUpsideDown className="fs-1" /> BENVENUTO{" "}
          <EmojiSmileFill className="fs-1" />
        </h1>
        <h3 className="hero fs-1"></h3>
        <Col>
          <h3 className="display-5 fs-4">scopri il meteo della tua città !</h3>
          <Link to="/WelcomeComponent/Homepage" className="nav-link">
            <Button>clicca QUI</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeComponent;
