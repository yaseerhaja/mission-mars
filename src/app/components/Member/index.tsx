import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import React from "react";
import "./Member.scss";

interface Props {
  data: MemberInt[];
}

export enum Job {
  "Navigation",
  "Solar panels",
  "Maintenance",
  "Mechanics",
}

export enum MemberType {
  "Pilot",
  "Engineer",
  "Passenger",
}

export interface MemberInt {
  id: number;
  type: string;
  fields: PilotEntity | EngineerEntity[] | PassengerEntity[] | null;
}

interface PilotEntity {
  experience: number | null;
  validation?: ValidationEntity[] | null;
}

interface EngineerEntity {
  experience?: number | null;
  job?: Job;
  validation?: ValidationEntity[] | null;
}

interface PassengerEntity {
  age?: number | null;
  wealth?: string | null;
  validation?: ValidationEntity[] | null;
}

interface ValidationEntity {
  minValue?: number | null;
  required?: boolean | null;
}

export function Member(props: Props) {
  console.log(props.data);

  const [type, setType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div className="Member">
      {props.data.map((dataItem, index) => (
        <div className="flex-container">
          <FormControl
            sx={{ width: "25ch", textAlign: "initial" }}
            className="form-item"
          >
            <InputLabel id={`type-select-label_` + index}>Type</InputLabel>
            <Select
              labelId={`type-select-label_` + index}
              id="type-select"
              value={type}
              label="Type"
              onChange={handleChange}
            >
              {props.data.map((dataItem) => (
                <MenuItem value={dataItem.type} key={dataItem.id}>
                  <Typography textAlign="center">{dataItem.type}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      ))}
    </div>
  );
}
