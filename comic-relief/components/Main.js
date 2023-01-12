import React from "react"

export const Main = ({element}) => {

  return (
    <div className="searchBar" style={style}>
        <center>
            <input placeholder={`Enter the ${element} name`} size="40"></input>
        </center>
        <br></br>
        <center>
          <button>Search</button>
        </center> 
    </div>
  )
}

export default Main