const numberOfPages = (quantityUsers, pageSize) => {
  let pagesCount = Math.ceil(quantityUsers / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return pages
}

export default numberOfPages
