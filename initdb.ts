const sql = require("better-sqlite3");
const db = sql("utopia.db");

const dummyEvents = [
  {
    title: "Annual Utopia Grove International Film Festival",
    startDate: "2024-01-16",
    startTime: "20:20",
    endDate: "2024-01-19",
    endTime: "22:20",
    description:
      "The 35th annual Utopia Grove International Film Festival is scheduled to be held physically from January 4 – 15, 2024. The annual star-studded Film Awards, honoring the best and brightest performances of the year, is scheduled for January 4, 2024.",
    address: "Kaptanpaşa, Çiftçiler Sk., 34440 Beyoğlu/İstanbul, Turkey",
    link: "",
    image: {
      size: 41815,
      type: "image/jpeg",
      name: "The-Grove-1_big_bu.jpg",
      lastModified: 1705335570907,
    },
  },
];
