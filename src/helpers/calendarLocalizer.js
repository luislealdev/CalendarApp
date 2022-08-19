import { dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";

// import enUS from "date-fns/locale/en-US";
import esEs from "date-fns/locale/es"; //Para español

const locales = {
  'es': esEs,
};

export const calendarLocalizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});