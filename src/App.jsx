import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Navbar } from "./layouts/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* <Route path="/about" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
