export const areEqual = (prevProps, nextProps) => {
  const prevVal = JSON.stringify(prevProps.elData);
  const nextVal = JSON.stringify(nextProps.elData);

  return prevVal === nextVal;
};

