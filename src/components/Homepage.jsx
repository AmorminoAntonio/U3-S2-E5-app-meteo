import { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { SendArrowUp } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const fetchWeather = (city) => {
    const apiKey = "740a09326fc4f9b8f61e02b771866c06";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;

    fetch(url)
      .then((response) => response.json())
      .then((cityWeather) => {
        if (cityWeather.cod === 200) {
          const { name } = cityWeather;
          navigate("/Details", { state: { city: name } });
        } else {
          alert("Città non trovata");
        }
      })
      .catch((err) => {
        console.log("Errore:", err);
        alert("Si è verificato un errore nella ricerca meteo.");
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <Container className="text-center">
      <h1 className="mt-5 display-4 fs-4">
        <img
        className="rounded-circle me-2"
          src="https://cdn-icons-gif.flaticon.com/8755/8755997.gif"
          width={60}
          alt=""
        />
        Voglio vedere il meteo di...
      </h1>
      <Row className="justify-content-center">
        <Col xs={2} md={4}>
          <Form onSubmit={handleSearch}>
            <InputGroup className="mb-3">
              <FormControl
              className="bg-opacity-75"
                type="text"
                placeholder="Inserisci la città"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Button variant="primary" type="submit">
                <SendArrowUp className="fs-4" />
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
