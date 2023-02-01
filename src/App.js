import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
