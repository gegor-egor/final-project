import React from "react";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/home/home";
import { CaughtPage } from "./components/pages/caught/caught"
import { PokemonPage } from "./components/pages/pokemon/pokemon"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/caught" element={<CaughtPage />}></Route>
          <Route path="/pokemon/:id" element={<PokemonPage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
