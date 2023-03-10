import { MemberInt } from "../components/Member";

export interface MissionDataInt extends MissionTableInt {
  memberInfo: MemberInt[];
}

export interface MissionTableInt {
  id: number;
  members: number;
  destination: string;
  departure: string;
  name: string;
  timeLeft: string;
}

export const missionTableData: MissionDataInt[] = [
  {
    id: 1,
    members: 5,
    departure: "21/07/2023",
    name: "Expedition 2021-11",
    destination: "Mars Alpha 116",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 5,
          },
        ],
      },
      {
        id: 2,
        type: "Engineer",
        fields: [
          {
            experience: 15,
          },
          {
            job: "Mechanics",
          },
        ],
      },
      {
        id: 3,
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
    ],
  },
  {
    id: 2,
    members: 5,
    departure: "21/06/2023",
    name: "Expedition 2021-12",
    destination: "Mars Alpha 126",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 15,
          },
        ],
      },
      {
        id: 2,
        type: "Engineer",
        fields: [
          {
            experience: 15,
          },
          {
            job: "Mechanics",
          },
        ],
      },
      {
        id: 3,
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
    ],
  },
  {
    id: 3,
    members: 5,
    departure: "21/04/2023",
    name: "Expedition 2021-4",
    destination: "Mars Alpha 126",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 11,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    members: 5,
    departure: "21/03/2023",
    name: "Expedition 2021-5",
    destination: "Mars Alpha 316",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 25,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    members: 5,
    departure: "01/04/2023",
    name: "Expedition 2021-6",
    destination: "Mars Alpha 416",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 15,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    members: 5,
    departure: "11/06/2023",
    name: "Expedition 2021-1",
    destination: "Mars Alpha 1416",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 25,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    members: 5,
    departure: "22/05/2023",
    name: "Expedition 2021-3",
    destination: "Mars Alpha 1216",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 35,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    members: 5,
    departure: "21/08/2023",
    name: "Expedition 2021-7",
    destination: "Mars Alpha 16",
    timeLeft: null,
    memberInfo: [
      {
        id: 1,
        type: "Pilot",
        fields: [
          {
            experience: 25,
          },
        ],
      },
    ],
  },
];
