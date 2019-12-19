export const areEqual = (prevProps, nextProps) => {
  const prevVal = JSON.stringify(prevProps.elData);
  const nextVal = JSON.stringify(nextProps.elData);

  console.log('object', prevVal,nextVal)
  return prevVal === nextVal;
};

