import { AddCircle } from "@mui/icons-material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HeroBanner } from "../../components/HeroBanner";
import { SearchBar } from "../../components/SearchBar";
import TableView from "../../components/TableView";

import { missionTableData } from "../../utils/mocks";

import "./Home.scss";

interface Props {}
const Home: React.FC<Props> = () => {
  const heroImagaeUrl = "/assets/mars.jpg";

  // Define a function that maps the state of the store to props for the Table component
  function mapStateToProps(state) {
    return {
      missionList: state.tableData,
    };
  }

  // Define a function that maps dispatch actions to props for the Table component
  function mapDispatchToProps(dispatch) {
    return {
      updateRow: (id) => dispatch({ type: "UPDATE_ROW", payload: id }),
      getData: () => dispatch({ type: "INITIAL" }),
    };
  }

  // Connect the Table component to the Redux store
  const ConnectedTable = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableView);

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

      <ConnectedTable />
    </div>
  );
};

export default Home;
