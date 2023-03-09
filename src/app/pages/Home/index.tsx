import { AddCircle } from "@mui/icons-material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { HeroBanner } from "../../components/HeroBanner";
import { SearchBar } from "../../components/SearchBar";
import TableView from "../../components/TableView";
import { missionTableData } from "../../utils/mocks";

import "./Home.scss";

interface Props {}
const Home: React.FC<Props> = () => {
  const heroImagaeUrl = "/assets/mars.jpg";
  return (
    <div className="Home">
      <HeroBanner imageUrl={heroImagaeUrl} />
      <div className="flex-container">
        <h1 className="flex-item">Mission</h1>
        <div className="flex-item">
          <SearchBar missionList={missionTableData} />
          <Button
            component={Link}
            to="/mission"
            variant="outlined"
            startIcon={<AddCircle />}
          >
            Add Mission
          </Button>
        </div>
      </div>
      <TableView />
    </div>
  );
};

export default Home;
