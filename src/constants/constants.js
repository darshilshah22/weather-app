import { BiLineChart } from "react-icons/bi";
import { BsBarChart, BsCalendarDate } from "react-icons/bs";
import { FiMapPin, FiSettings } from "react-icons/fi";

export const menus = [
  {
    name: "ChartBar",
    icon: BsBarChart,
  },
  {
    name: "Calendar",
    icon: BiLineChart,
  },
  {
    name: "ChartLine",
    icon: FiMapPin,
  },
  {
    name: "GearSix",
    icon: FiSettings,
  },
  {
    name: "MapPin",
    icon: BsCalendarDate,
  },
];

export const Data = [
  {
    id: 1,
    time: "Morning",
    temperature: 20,
  },
  {
    id: 2,
    time: "Afternoon",
    temperature: 28,
  },
  {
    id: 3,
    time: "Evening",
    temperature: 34,
  },
  {
    id: 4,
    time: "Night",
    temperature: 30,
  },
];
