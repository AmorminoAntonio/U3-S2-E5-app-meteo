import { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { city } = location.state;
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = "740a09326fc4f9b8f61e02b771866c06";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=it`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=it`;

    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });

    fetch(forecastUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  if (!weatherData || !forecastData) return <div>Caricamento...</div>;

  const { main, weather, wind, name } = weatherData;
  const { list } = forecastData;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { weekday: "short", day: "numeric", month: "short" };
    return date.toLocaleDateString("it-IT", options);
  };

  const groupForecastByDate = (forecastList) => {
    const forecastByDate = [];

    forecastList.forEach((forecast) => {
      const date = formatDate(forecast.dt);
      const existingDate = forecastByDate.find((item) => item.date === date);
      if (existingDate) {
        existingDate.forecasts.push(forecast);
      } else {
        forecastByDate.push({
          date: date,
          forecasts: [forecast]
        });
      }
    });

    return forecastByDate;
  };

  const groupedForecast = groupForecastByDate(list);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <Container className="text-center">
        <Card className="mt-2 rounded-4 opacity-75">
          <h1 className="fs-2 mt-2 mb-2">{name}</h1>
          <Card.Body>
            <Row>
              <Col xs={4} md={12}>
                <Card.Title>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
                    alt={weather[0].description}
                    width={80}
                  />{" "}
                  <strong>{weather[0].description}</strong>{" "}
                </Card.Title>
                <Card.Text>
                  <strong>temp:</strong> {Math.floor(main.temp)}°C
                </Card.Text>
                <Card.Text>
                  <strong>temp_min:</strong> {Math.floor(main.temp_min)}°C
                </Card.Text>
                <Card.Text>
                  <strong>temp_max:</strong> {Math.floor(main.temp_max)}°C
                </Card.Text>
                <Card.Text>
                  {" "}
                  <strong>wind speed:</strong> {wind.speed} m/s
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Link to="/">
          <Button className="mt-3 mb-2" variant="primary" onClick={handleBack}>
            Indietro
          </Button>
        </Link>

        <h3 className="mb-2 mt-1 fs-4">
          Previsioni Meteo nei prossimi cinque giorni
        </h3>
        <Row className="justify-content-between">
          {groupedForecast.slice(0, 5).map((forecastGroup, index) => {
            return (
              <Col key={index} xs={6} md={2}>
                <Card className="rounded-4 opacity-75">
                  <Card.Body>
                    <Card.Title>{forecastGroup.date}</Card.Title>
                    <img
                      src={`https://openweathermap.org/img/wn/${forecastGroup.forecasts[0].weather[0].icon}.png`}
                      alt={forecastGroup.forecasts[0].weather[0].description}
                      width={40}
                    />
                    <Card.Text>
                      <strong>temp:</strong>{" "}
                      {Math.floor(forecastGroup.forecasts[0].main.temp)}°C
                    </Card.Text>
                    <Card.Text>
                      <strong>temp_min:</strong>{" "}
                      {Math.floor(forecastGroup.forecasts[0].main.temp_min)}°C
                    </Card.Text>
                    <Card.Text>
                      <strong>temp_max:</strong>{" "}
                      {Math.floor(forecastGroup.forecasts[0].main.temp_max)}°C
                    </Card.Text>
                    <Card.Text>
                      <strong>wind speed:</strong>{" "}
                      {forecastGroup.forecasts[0].wind.speed} m/s
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Details;
