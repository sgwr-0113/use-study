export const heavyFunc = (parameter: number) => {
  let i = 0;
  while (i < 100000000) i++;
  return parameter * parameter;
};
