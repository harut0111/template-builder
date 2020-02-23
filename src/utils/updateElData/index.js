export const updateElementData = (els, activeElId, elData) => {
  const elements = els.map(obj => {
    if (obj.elId === activeElId) {
      return Object.assign({}, obj, {
        elData: { ...obj.elData, ...elData }
      });
    }
    return obj;
  });
  return elements;
};
