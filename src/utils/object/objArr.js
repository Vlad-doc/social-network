export const objToArr = (obj) => {
  return Object.values(obj).filter((items) => items !== null)
}
