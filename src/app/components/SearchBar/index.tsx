/**
 *
 * SearchBar
 *
 */
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { Box } from "@mui/system";
import { MissionDataInt } from "../../utils/mocks";

interface Props {
  missionList: MissionDataInt[];
}

export function SearchBar(props: Props) {
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
      <Autocomplete
        id="search"
        sx={{
          minWidth: "330px",
        }}
        options={props.missionList}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Search" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.name, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.name, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    </Box>
  );
}
