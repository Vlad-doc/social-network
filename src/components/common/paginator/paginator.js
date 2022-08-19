import { Pagination } from "antd"
import React from "react"
import "./paginator.module.css"

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}) => {
  const onChange = (page) => onPageChanged(page)
  return (
    <Pagination
      total={totalUsersCount}
      pageSize={pageSize}
      onChange={onChange}
      current={currentPage}
      showSizeChanger={false}
    />
  )
}

export default Paginator
