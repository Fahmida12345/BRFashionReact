import Navber from "./componants/Navber";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./componants/Home";
import Footer from "./componants/Footer";
import Copyright from "./componants/Copyright";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Responsive.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" />
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
