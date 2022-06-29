import React from "react"
import headStyle from "./header.module.css"

function Header() {
  return (
    <header className={headStyle.header}>
      <img
        src="https://mms.businesswire.com/media/20220308006218/en/774915/22/Coca-Cola_black_and_white_bottles_logo.jpg"
        alt="logo"
      />
    </header>
  )
}

export default Header
