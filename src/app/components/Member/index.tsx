import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import { MissionDataInt } from "../../utils/mocks";
import "./Member.scss";

interface Props {
  data: MissionDataInt[];
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
  fields: PilotEntity[] | EngineerEntity[] | PassengerEntity[] | null;
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

  let { id } = useParams();
  const missionId = Number(id);
  const mode: "Edit" | "New" =
    missionId && typeof missionId === "number" ? "Edit" : "New";

  const [type, setType] = React.useState("Pilot");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <div className="Member">
      {mode === "Edit" ? (
        props.data.map((dataItem, index) => {
          return (
            <>
              {dataItem.memberInfo.map((member, idx) => (
                <div className="flex-container">
                  <FormControl
                    sx={{ width: "25ch", textAlign: "initial" }}
                    className="form-item"
                  >
                    <InputLabel id={`type-select-label_` + index + `_` + idx}>
                      Type
                    </InputLabel>
                    <Select
                      labelId={`type-select-label_` + index + `_` + idx}
                      id="type-select"
                      value={type}
                      label="Type"
                      onChange={handleChange}
                    ></Select>
                  </FormControl>
                  {member.fields.map((field) =>
                    field.experience ? (
                      <TextField
                        required
                        id="outlined-required"
                        label="Experiience"
                        type="number"
                        defaultValue={field.experience}
                        className="form-item"
                      />
                    ) : field.age ? (
                      <TextField
                        required
                        id="outlined-required"
                        label="Age"
                        type="number"
                        defaultValue={field.age}
                        className="form-item"
                      />
                    ) : field.wealth ? (
                      <TextField
                        required
                        id="outlined-required"
                        label="Wealth"
                        defaultValue={field.wealth}
                        className="form-item"
                      />
                    ) : (
                      <></>
                    )
                  )}
                </div>
              ))}
            </>
          );
        })
      ) : mode === "New" ? (
        <div className="flex-container">
          <FormControl
            sx={{ width: "25ch", textAlign: "initial" }}
            className="form-item"
          >
            <InputLabel id={`type-select-label_`}>Type</InputLabel>
            <Select
              labelId={`type-select-label_`}
              id="type-select"
              value={type}
              label="Type"
              onChange={handleChange}
            >
              {Object.keys(MemberType).map((type, index) => (
                <MenuItem value={MemberType[type]} key={index}>
                  <Typography textAlign="center">{MemberType[type]}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
