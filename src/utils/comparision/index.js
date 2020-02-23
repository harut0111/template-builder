export const areEqual = (prevProps, nextProps) => {
  const prevVal = JSON.stringify(prevProps);
  const nextVal = JSON.stringify(nextProps);

  // console.log('prevVal', prevVal);
  // console.log('nextVal', nextVal);
  // console.log('prevVal === nextVal', prevVal === nextVal)

  return prevVal === nextVal;
};

