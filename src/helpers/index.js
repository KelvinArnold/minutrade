// Some helpers
const dateFormat = (date = '', full = false) => {
  if (date !== '') {
    const dateFormat = new Date(date);
    const day = dateFormat.getDate();
    const month = dateFormat.getMonth() + 1;
    const fullYear = dateFormat.getFullYear();
    const  fullDate = `${day > 9 ? day : '0'+day}/${month > 9 ? month: '0'+month}/${fullYear}`;
    if (full) {
      const hours = dateFormat.getHours();
      const minutes = dateFormat.getMinutes();
      const seconds = dateFormat.getSeconds();
      const fullTime = ` ${hours > 9 ? hours : '0'+hours}:${minutes > 9 ? minutes:'0'+minutes}:${seconds>9?seconds:'0'+seconds}`;
      return `${fullDate} ${fullTime}`;
    }
    return fullDate;
  }
  return date;
}
export {
  dateFormat
};