export const mapFormattedDateStringToIsoString = (
  formattedDate: string
): string => {
  const [datePart, timePart] = formattedDate.split(' ');
  const [month, day, year] = datePart.split('/');
  const [hours, minutes] = timePart.split(':');
  return new Date(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes)
  ).toISOString();
};
