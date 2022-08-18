export const mappingObject = (items, id, followed) =>
  items.map((item) => (item.id === id ? { ...item, ...followed } : item))
