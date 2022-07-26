import React from "react"
import preLoader from "../../../assets/images/Spinner-1s-200px.svg"
import preLoaderStyles from "./preloader.module.css"

const Preloader = (props) => {
  return (
    <img src={preLoader} alt="Preloader" className={preLoaderStyles.image} />
  )
}

export default Preloader
