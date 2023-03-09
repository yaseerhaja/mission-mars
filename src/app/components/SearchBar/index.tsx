/**
 *
 * SearchBar
 *
 */
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

export function SearchBar({ filterBy }) {
  const handleOnChange = (event) => {
    filterBy({ name: event.target.value });
  };

  return (
    <Box
      sx={{
        margin: 3,
        marginRight: 0,
        minWidth: 300,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <TextField label="Search" onChange={handleOnChange} margin="normal" />
    </Box>
  );
}
