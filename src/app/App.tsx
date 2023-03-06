import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import TableView from "./components/TableView";
interface Props {
  name: string;
}
const App: React.FC<Props> = ({ name }) => {
  return (
    <div className="App">
      <Header title={"Mission Mars"} />
      <SearchBar />
      <TableView />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default App;
