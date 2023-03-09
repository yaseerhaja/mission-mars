import { missionTableData } from "../utils/mocks";

const initialState = {
  tableData: missionTableData,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ROW":
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    case "UPDATE_ROW":
      return {
        ...state,
        tableData: state.tableData.map((row) =>
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
    default:
      return state;
  }
}
