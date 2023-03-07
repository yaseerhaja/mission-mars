export interface MissionInt {
  name: string;
  id: number;
}

export interface MissionTableData {
  id: number;
  members: number;
  destination: string;
  departure: string;
  name: string;
  timeLeft: string;
}

export const missionList: MissionInt[] = [
  { name: "Expedition 2021-11", id: 1 },
  { name: "Expedition 2021-12", id: 2 },
  { name: "Expedition 2021-4", id: 3 },
  { name: "Expedition 2021-5", id: 4 },
  { name: "Expedition 2021-6", id: 5 },
  { name: "Expedition 2021-1", id: 6 },
  { name: "Expedition 2021-3", id: 7 },
  {
    name: "Expedition 2021-7",
    id: 2003,
  },
];

export const missionTableData: MissionTableData[] = [
  {
    id: 1,
    members: 5,
    departure: "21/07/2023",
    name: "Expedition 2021-11",
    destination: "Mars Alpha 116",
    timeLeft: null,
  },
  {
    id: 2,
    members: 5,
    departure: "21/06/2023",
    name: "Expedition 2021-12",
    destination: "Mars Alpha 126",
    timeLeft: null,
  },
  {
    id: 3,
    members: 5,
    departure: "21/1/2023",
    name: "Expedition 2021-4",
    destination: "Mars Alpha 16",
    timeLeft: null,
  },
  {
    id: 4,
    members: 5,
    departure: "21/03/2023",
    name: "Expedition 2021-5",
    destination: "Mars Alpha 316",
    timeLeft: null,
  },
  {
    id: 5,
    members: 5,
    departure: "21/04/2023",
    name: "Expedition 2021-6",
    destination: "Mars Alpha 416",
    timeLeft: null,
  },
  {
    id: 6,
    members: 5,
    departure: "21/06/2023",
    name: "Expedition 2021-1",
    destination: "Mars Alpha 1416",
    timeLeft: null,
  },
  {
    id: 7,
    members: 5,
    departure: "21/05/2023",
    name: "Expedition 2021-3",
    destination: "Mars Alpha 1216",
    timeLeft: null,
  },
  {
    id: 8,
    members: 5,
    departure: "21/02/2023",
    name: "Expedition 2021-7",
    destination: "Mars Alpha 16",
    timeLeft: null,
  },
];
