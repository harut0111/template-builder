export const getActiveEl = layout => {
  const filteredItem = layout.elements.filter(
    el => el.elId === layout.activeEl.id
  );
  return filteredItem[0];
};
