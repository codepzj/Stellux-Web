import dayjs from "dayjs";

/**
 * 时间格式化
 * @param date 时间
 * @returns 时间格式化
 */
export function dayFormat(date: string) {
  return dayjs(date).format("YYYY-MM-DD");
}

/**
 * 时间格式化
 * @param date 时间
 * @returns 时间格式化
 */
export function dayFormatWithTime(date: string) {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
}

/**
 * 时间距离现在多久
 * @param date 时间
 * @returns 时间距离现在多久
 */
export function timeBeforeNow(date: string) {
  const diff = dayjs().diff(dayjs(date), "second");
  if (diff < 60) {
    return `${diff}秒前`;
  }
   else if (diff < 3600) {
    return `${Math.floor(diff / 60)}分钟前`;
  }
  else if (diff < 86400) {
    return `${Math.floor(diff / 3600)}小时前`;
  }
  else if (diff < 604800) {
    return `${Math.floor(diff / 86400)}天前`;
  }
  else if (diff < 2592000) {
    return `${Math.floor(diff / 604800)}周前`;
  }
  else if (diff < 31536000) {
    return `${Math.floor(diff / 2592000)}月前`;
  }
  else {
    return `${Math.floor(diff / 31536000)}年前`;
  }
}