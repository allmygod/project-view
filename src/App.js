import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List.jsx";
import Detail from "./pages/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
