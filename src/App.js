import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.jsx";
import Pic from "./Components/Pic";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/pic">
            <Route index element={<Pic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
