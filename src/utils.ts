export const dateStringToDate = (stringDate: string): Date => {
  const dateStore = stringDate.split('/').map((dateElement: string): number => {
    return Number(dateElement);
  });
  return new Date(dateStore[2], dateStore[1] - 1, dateStore[0]);
};
