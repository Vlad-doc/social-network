import React from "react"
import numberOfPages from "../../../utils/paginator/numberOfPages"
import styles from "./paginator.module.css"

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}) => {
  const pages = numberOfPages(totalUsersCount, pageSize)
  return (
    <div className={styles.list}>
      {pages.map((page, index) => (
        <span
          key={index}
          className={currentPage === page ? styles.list_active : null}
          onClick={() => onPageChanged(page)}
        >
          {page}
        </span>
      ))}
    </div>
  )
}

export default Paginator
