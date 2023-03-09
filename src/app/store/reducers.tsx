import { missionTableData } from "../utils/mocks";

const initialState = {
  tableData: missionTableData,
  _filterTableData: missionTableData,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ROW":
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
        _filterTableData: [...state.tableData, action.payload],
      };
    case "UPDATE_ROW":
      return {
        ...state,
        tableData: state.tableData?.map((row) =>
          row.id === action.payload.id ? action.payload : row
        ),
      };
    case "DELETE_ROW":
      return {
        ...state,
        tableData: state.tableData.filter((row) => row.id !== action.payload),
      };
    case "INITIAL":
      return {
        ...state,
        tableData: state.tableData,
      };
    case "SEARCH":
      let filterResult = state._filterTableData;
      filterResult = filterResult.filter((data) =>
        data.name.toLowerCase().includes(action.payload.name.toLowerCase())
      );
      return {
        ...state,
        tableData: filterResult,
      };
    default:
      return state;
  }
}
