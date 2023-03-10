import { Button, IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Typography from "@mui/material/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import { MissionDataInt } from "../../utils/mocks";
import "./Member.scss";

interface Props {
  data: MissionDataInt[];
  handleCallBack: any;
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
}

interface EngineerEntity {
  experience?: number | null;
  job?: string;
}

interface PassengerEntity {
  age?: number | null;
  wealth?: string | null;
}

export function Member(props: Props) {
  let { id } = useParams();
  const missionId = Number(id);
  const mode: "Edit" | "New" =
    missionId && typeof missionId === "number" ? "Edit" : "New";
  let newMember = [
    {
      id: Date.now(),
      type: "Passenger",
      fields: [
        {
          age: 5,
        },
        {
          wealth: "Rich",
        },
      ],
    },
  ];

  let [memberInfo, setMemberInfo] = React.useState(
    props.data[0]?.memberInfo ?? [...newMember]
  );

  const handleDeleteField = (id: number = null, event: SelectChangeEvent) => {
    memberInfo = memberInfo.filter((data) => {
      return data.id !== id;
    });
    setMemberInfo([...memberInfo]);
  };

  const handleExperience = (id: number = null, event: SelectChangeEvent) => {
    memberInfo.forEach((data) => {
      if (data.id === id) {
        data.fields.forEach((field) => {
          if (field.experience) {
            field.experience = event.target.value;
          }
        });
      }
    });
    setMemberInfo([...memberInfo]);
  };

  const handleNewMember = () => {
    if (memberInfo.length) {
      memberInfo.find((member) => {
        return member.type === "Pilot";
      });
      memberInfo = [...memberInfo, ...newMember];
    }
    setMemberInfo(memberInfo.length ? memberInfo : newMember);
  };

  const getMemberBasedComponent = (type) => {
    const dataModal: MemberInt[] = [];
    if (type === "Pilot") {
      dataModal.push({
        id: Date.now(),
        type,
        fields: [
          {
            experience: 1,
          },
        ],
      });
    } else if (type === "Engineer") {
      dataModal.push({
        id: Date.now(),
        type,
        fields: [
          {
            experience: 15,
          },
          {
            job: "Mechanics",
          },
        ],
      });
    } else if (type === "Passenger") {
      dataModal.push({
        id: Date.now(),
        type,
        fields: [
          {
            age: 1,
          },
          {
            wealth: "Rich",
          },
        ],
      });
    }

    return dataModal;
  };

  const handleChange = (id: number = null, event: SelectChangeEvent) => {
    if (mode === "New") {
      const data: MemberInt[] = getMemberBasedComponent(event.target.value);
      memberInfo.forEach((member) => {
        if (member.id === id) {
          member.type = event.target.value;
          member.fields = data[0].fields;
        }
      });
      setMemberInfo([...memberInfo]);
    } else {
      memberInfo.forEach((data) => {
        if (data.id === id) {
          data.type = event.target.value;
          if (event.target.value === "Pilot") {
            data.fields.length = 0;
            data.fields.push({
              experience: null,
            });
          }
        }
      });

      setMemberInfo([...memberInfo]);
    }
  };

  const handleJobChange = (id: number = null, event: SelectChangeEvent) => {
    memberInfo.forEach((data) => {
      if (data.id === id) {
        data.fields.forEach((field) => {
          if (field.job) {
            field.job = event.target.value;
          }
        });
      }
    });
    setMemberInfo([...memberInfo]);
  };

  const handleAgeChange = (id: number = null, event: SelectChangeEvent) => {
    memberInfo.forEach((data) => {
      if (data.id === id) {
        data.fields.forEach((field) => {
          if (field.age) {
            field.age = event.target.value;
          }
        });
      }
    });
    setMemberInfo([...memberInfo]);
  };

  const handleWealthChange = (id: number = null, event: SelectChangeEvent) => {
    memberInfo.forEach((data) => {
      if (data.id === id) {
        data.fields.forEach((field) => {
          if (field.wealth) {
            field.wealth = event.target.value;
          }
        });
      }
    });
    setMemberInfo([...memberInfo]);
  };

  return (
    <div className="Member">
      {props.handleCallBack(memberInfo)}
      {memberInfo?.map((member, idx) => {
        return (
          <div key={idx} className="flex-container">
            <FormControl
              sx={{ width: "25ch", textAlign: "initial" }}
              className="form-item"
            >
              <InputLabel id={`type-select-label_` + idx}>Type</InputLabel>

              <Select
                labelId={`type-select-label_` + idx}
                id="type-select"
                defaultValue={member.type}
                value={member.type}
                label="Type"
                onChange={handleChange.bind(this, member.id)}
              >
                {MemberType.map((type) => (
                  <MenuItem value={type} key={type}>
                    <Typography>{type}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {member.fields?.map((field, index) =>
              field.experience === "" || field.experience ? (
                <TextField
                  key={`experience-` + index}
                  required
                  id="outlined-required"
                  label="Experiience"
                  type="number"
                  defaultValue={field.experience}
                  onChange={handleExperience.bind(this, member.id)}
                  className="form-item"
                  error={member.type === "Pilot" && field.experience < 10}
                  helperText={
                    member.type === "Pilot" && field.experience === 0
                      ? "Required!"
                      : field.experience < 10
                      ? "More than 10 years needed"
                      : ""
                  }
                  InputProps={
                    member.type === "Pilot" && {
                      inputProps: {
                        min: 10,
                      },
                    }
                  }
                />
              ) : field.age === "" || field.age ? (
                <TextField
                  key={`age-` + index}
                  required
                  id="outlined-required"
                  label="Age"
                  type="number"
                  onChange={handleAgeChange.bind(this, member.id)}
                  defaultValue={field.age}
                  className="form-item"
                />
              ) : field.wealth === "" || field.wealth ? (
                <TextField
                  key={`wealth-` + index}
                  required
                  id="outlined-required"
                  label="Wealth"
                  onChange={handleWealthChange.bind(this, member.id)}
                  defaultValue={field.wealth}
                  className="form-item"
                />
              ) : field.job === "" || field.job ? (
                <FormControl
                  key={`job-` + index}
                  sx={{ width: "25ch", textAlign: "initial" }}
                  className="form-item"
                >
                  <InputLabel id={`job-select-label_` + index + `_` + idx}>
                    Job
                  </InputLabel>

                  <Select
                    labelId={`tjob-select-label_` + index + `_` + idx}
                    id="job-select"
                    defaultValue={field.job}
                    value={field.job}
                    label="Job"
                    onChange={handleJobChange.bind(this, member.id)}
                  >
                    {Job.map((job) => (
                      <MenuItem value={job} key={job}>
                        <Typography>{job}</Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <></>
              )
            )}

            <IconButton
              onClick={handleDeleteField.bind(this, member.id)}
              aria-label="delete"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </div>
        );
      })}

      <Button onClick={handleNewMember} variant="outlined" color="primary">
        New Member
      </Button>
    </div>
  );
}
