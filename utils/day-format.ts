import dayjs from "dayjs";

export function dayFormat(date: string) {
  return dayjs(date).format("YYYY-MM-DD");
}

export function dayFormatWithTime(date: string) {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}