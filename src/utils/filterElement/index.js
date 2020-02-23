export const filterElement = (layout, id) => {
  const filteredItem = layout.elements.filter(el => el.elId !== id);
  return filteredItem;
};
