export const areEqual = (prevProps, nextProps) => {
  const prevVal = JSON.stringify(prevProps);
  const nextVal = JSON.stringify(nextProps);

  return prevVal === nextVal;
};

