export const formatToKSTDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const kstOffset = 9 * 60;
  const utcOffset = date.getTimezoneOffset();
  const kstDate = new Date(date.getTime() + (kstOffset + utcOffset) * 60000);
  const year = kstDate.getFullYear();
  const month = String(kstDate.getMonth() + 1).padStart(2, '0');
  const day = String(kstDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
