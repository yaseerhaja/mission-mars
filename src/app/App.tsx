import Container from "@mui/material/Container";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Mission from "./pages/Mission";

interface Props {
  name: string;
}
const App: React.FC<Props> = ({ name }) => {
  return (
    <div className="App">
      <Header title={"Mission Mars"} />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/mission/:id" element={<Mission />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
