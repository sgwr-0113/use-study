export const heavyFunc = (parameter: number) => {
  const start = performance.now();
  while (performance.now() - start < 250);

  return parameter * parameter;
};
