import React from "react"
import style from "./Main.css"

export const Main = ({element}) => {
  return (
    <div className="searchBar" style={style}>
        <center>
            <input placeholder={`Enter the ${element} name`} size="40"></input>
        </center>
    </div>
  )
}

export default Main