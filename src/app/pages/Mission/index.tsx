import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import React from "react";
import dayjs, { Dayjs } from "dayjs";

import Typography from "@mui/material/Typography";
import { HeroBanner } from "../../components/HeroBanner";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { jsonData } from "../../utils/mocks";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import "./Mission.scss";
import { Member } from "../../components/Member";

interface Props {}
const Mission: React.FC<Props> = () => {
  const heroImagaeUrl = "/assets/mission.jpg";

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  };

  const breadcrumbs = [
    <Typography color="inherit" component={Link} to="/">
      Home
    </Typography>,
    <Typography key="3" color="text.primary">
      New / Edit Mission
    </Typography>,
  ];

  const steps = ["New/Edit Mission", "Members", "Save"];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [destination, setDestination] = React.useState("");
  const [dateInfo, setDateInfo] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  const handleChange = (event: SelectChangeEvent) => {
    setDestination(event.target.value as string);
  };

  return (
    <div className="Mission">
      <HeroBanner imageUrl={heroImagaeUrl} />
      <Breadcrumbs
        sx={{
          "&": {
            m: 1,
          },
        }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Paper
        sx={{
          "&": {
            p: 3,
          },
        }}
        elevation={3}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <div className="wizard-container-form1">
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue=""
                    className="form-item"
                  />
                  <FormControl
                    sx={{ width: "25ch", textAlign: "initial" }}
                    className="form-item"
                  >
                    <InputLabel id="destination-select-label">
                      Destination
                    </InputLabel>
                    <Select
                      labelId="destination-select-label"
                      id="destination-select"
                      value={destination}
                      label="Destination"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <LocalizationProvider
                    className="form-item"
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <MobileDatePicker
                        label="Departure"
                        value={dateInfo}
                        onChange={(newValue) => setDateInfo(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              ) : activeStep === 1 ? (
                <div className="wizard-container-form2">
                  <Member data={jsonData} />
                </div>
              ) : (
                <div className="wizard-container-form3">
                  <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                  />
                </div>
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default Mission;
