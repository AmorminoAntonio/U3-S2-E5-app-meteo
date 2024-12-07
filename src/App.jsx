import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import Details from "./components/Details";
import WelcomeComponent from "./components/WelcomeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/WelcomeComponent" element={<WelcomeComponent />} />
          <Route path="/WelcomeComponent/Homepage" element={<Homepage />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Details/meteocitta" element={<Details />} />
          <Route path="/" element={<MyNav />} />
          <Route path="/MyNav" element={<MyNav />} />
        </Routes>
        {/* <MyNav /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
