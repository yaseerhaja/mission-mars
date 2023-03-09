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

const Job: string[] = [
  "Navigation",
  "Solar panels",
  "Maintenance",
  "Mechanics",
];

const MemberType: string[] = ["Pilot", "Engineer", "Passenger"];

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
  job?: string;
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
  let { id } = useParams();
  const missionId = Number(id);
  const mode: "Edit" | "New" =
    missionId && typeof missionId === "number" ? "Edit" : "New";

  const [type, setType] = React.useState("Pilot");
  const [job, setJob] = React.useState("Navigation");

  const handleChange = (event: SelectChangeEvent, index: number = null) => {
    if (mode === "New") {
      setType(event.target.value as string);
    } else {
      console.log("set exiaiting data");
    }
  };

  const handleJobChange = (event: SelectChangeEvent, index: number = null) => {
    if (mode === "New") {
      setJob(event.target.value as string);
    } else {
      console.log("set exiaiting data");
    }
  };

  return (
    <div className="Member">
      {mode === "Edit" ? (
        props.data?.map((dataItem, index) => {
          return (
            <div key={index}>
              {dataItem.memberInfo?.map((member, idx) => {
                return (
                  <div key={idx} className="flex-container">
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
                        defaultValue={member.type}
                        value={member.type}
                        label="Type"
                        onChange={handleChange.bind(this, idx)}
                      >
                        {MemberType.map((type) => (
                          <MenuItem value={type} key={type}>
                            <Typography>{type}</Typography>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {member.fields?.map((field, index) =>
                      field.experience ? (
                        <TextField
                          key={`experience-` + index}
                          required
                          id="outlined-required"
                          label="Experiience"
                          type="number"
                          defaultValue={field.experience}
                          className="form-item"
                        />
                      ) : field.age ? (
                        <TextField
                          key={`age-` + index}
                          required
                          id="outlined-required"
                          label="Age"
                          type="number"
                          defaultValue={field.age}
                          className="form-item"
                        />
                      ) : field.wealth ? (
                        <TextField
                          key={`wealth-` + index}
                          required
                          id="outlined-required"
                          label="Wealth"
                          defaultValue={field.wealth}
                          className="form-item"
                        />
                      ) : (
                        <FormControl
                          key={`job-` + index}
                          sx={{ width: "25ch", textAlign: "initial" }}
                          className="form-item"
                        >
                          <InputLabel
                            id={`job-select-label_` + index + `_` + idx}
                          >
                            Type
                          </InputLabel>

                          <Select
                            labelId={`tjob-select-label_` + index + `_` + idx}
                            id="job-select"
                            defaultValue={field.job}
                            value={field.job}
                            label="Job"
                            onChange={handleJobChange.bind(this, idx)}
                          >
                            {Job.map((job) => (
                              <MenuItem value={job} key={job}>
                                <Typography>{job}</Typography>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )
                    )}
                  </div>
                );
              })}
            </div>
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
              onChange={handleChange.bind(this)}
            >
              {MemberType.map((type) => (
                <MenuItem value={type} key={type}>
                  <Typography>{type}</Typography>
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
