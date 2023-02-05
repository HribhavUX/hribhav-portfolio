import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.jsx";
import MagnidVR from "./Pages/MagnidVR";
import Rozgaar from './Pages/Rozgaar';
import NotWork from "./Pages/NotWork";
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
          <Route path="/magnidvr">
            <Route index element={<MagnidVR />} />
          </Route>
          <Route path="/rozgaar">
            <Route index element={<Rozgaar />} />
          </Route>
          <Route path="/notwork">
            <Route index element={<NotWork />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
