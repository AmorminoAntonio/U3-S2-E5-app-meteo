import { Col, Container, Navbar, Row } from "react-bootstrap";
import { TrophyFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const MyNav = () => {
  return (
    <>
      <Navbar className="d-flex" data-bs-theme="light">
        <Container fluid className="justify-content-center mt-5">
          <Row>
            <h1 className="display-5 fs-4 text-center">
              {" "}
              <strong className="fw-bold fs-3">
                Buongiorno a te!{" "}
              </strong> <br /> Noi 4 siamo i Searcher Climate Event e siamo qui
              per aiutarti nella ricerca del meteo. <br /> aaah...
              dimenticavo... <br /> Ovviamente siamo i "MIGLIORI"{" "}
              <TrophyFill className="fs-3" />
              <br />
              <br />
              <strong>
                Scegli pure uno di noi per aiutarti nella tua ricerca !
              </strong>
            </h1>
            <Col className="mt-4 text-center">
              <NavLink to="/WelcomeComponent">
                <img
                  className="rounded-circle"
                  src="https://cdn-icons-gif.flaticon.com/11779/11779621.gif"
                  alt=""
                  width={200}
                />
              </NavLink>
            </Col>
            <Col className="mt-4 text-center">
              <NavLink to="/WelcomeComponent">
                <img
                  className="rounded-circle"
                  src="https://cdn-icons-gif.flaticon.com/17484/17484890.gif"
                  alt=""
                  width={200}
                />
              </NavLink>
            </Col>
            <Col className="mt-4 text-center">
              <NavLink to="/WelcomeComponent">
                <img
                  className="rounded-circle"
                  src="https://cdn-icons-gif.flaticon.com/17103/17103009.gif"
                  alt=""
                  width={200}
                />
              </NavLink>
            </Col>
            <Col className="mt-4 text-center">
              <NavLink to="/WelcomeComponent">
                <img
                  className="rounded-circle"
                  src="https://cdn-icons-gif.flaticon.com/17858/17858208.gif"
                  alt=""
                  width={200}
                />
              </NavLink>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
