/**
 *
 * @param date
 * @param showTime true to show time
 * @returns a readable time
 */
export const formatDate = (date: string, showTime = false): string => {
  const dateObj = new Date(date);

  const day = dateObj.getDate();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[dateObj.getMonth()];

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  return `${day} ${month}, ${dateObj.getFullYear()} ${
    showTime ? `${hours}:${minutes}:${seconds}` : ""
  }`;
};
