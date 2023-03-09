import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import React from "react";
import dayjs, { Dayjs } from "dayjs";

import Typography from "@mui/material/Typography";
import { HeroBanner } from "../../components/HeroBanner";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";
import { missionTableData } from "../../utils/mocks";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import "./Mission.scss";
import { Member } from "../../components/Member";
import Modal from "@mui/material/Modal";

interface Props {}
const Mission: React.FC<Props> = () => {
  const heroImagaeUrl = "/assets/mission.jpg";

  let { id } = useParams();
  const missionId = Number(id);
  const mode: "Edit" | "New" =
    missionId && typeof missionId === "number" ? "Edit" : "New";

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const breadcrumbs = [
    <Typography color="inherit" component={Link} to="/">
      Home
    </Typography>,
    <Typography key="3" color="text.primary">
      New / Edit Mission
    </Typography>,
  ];

  const steps = ["New/Edit Mission", "Members"];
  const destinations = [
    "Mars Alpha 116",
    "Mars Alpha 126",
    "Mars Alpha 16",
    "Mars Alpha 316",
    "Mars Alpha 416",
    "Mars Alpha 1416",
    "Mars Alpha 1216",
    "Mars Alpha 16",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false);
    navigate("/");
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fff",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleClose = () => setOpen(false);
  const handleNext = () => {
    if (name === "") {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleCreateMission = () => {
    setOpen(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [name, setName] = React.useState("");
  const [destination, setDestination] = React.useState(destinations[0]);
  const [dateInfo, setDateInfo] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  const handleChange = (event: SelectChangeEvent) => {
    setDestination(event.target.value as string);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <></>
          ) : (
            <React.Fragment>
              {activeStep === 0 ? (
                <div className="wizard-container-form1">
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                    error={name === ""}
                    helperText={name === "" ? "Required!" : " "}
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
                      {destinations.map((dest) => (
                        <MenuItem value={dest}>{dest}</MenuItem>
                      ))}
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
                        minDate={dayjs("2022-04-17")}
                        onChange={(newValue) => setDateInfo(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              ) : activeStep === 1 && mode === "Edit" ? (
                <div className="wizard-container-form2">
                  <Member data={missionTableData} />
                </div>
              ) : activeStep === 1 && mode === "New" ? (
                <div className="wizard-container-form2">
                  <Member data={[]} />
                </div>
              ) : (
                <></>
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
                {activeStep === 0 ? (
                  <Button variant="outlined" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={handleCreateMission}>
                    {mode === "New" ? "Create" : "Update"}
                  </Button>
                )}

                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {mode === "New"
                          ? "New Mission created Successfully."
                          : "Mission updated successfully"}
                      </Typography>

                      <Button
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          flexFlow: "row",
                          width: "100%",
                          p: 2,
                        }}
                        onClick={handleCloseModal}
                      >
                        Close
                      </Button>
                    </Box>
                  </Modal>
                </div>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default Mission;
