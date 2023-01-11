import React from 'react'
import hulk from './../assets/hulk.jpg'

export const Card = ({data}) => {
  return (
    <>
      {
        (data)?(
          data.map(item=>{
            return(
              <div className="card">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""></img>
                  <div className="title">
                    <h4>{item.name}</h4>
                  </div>
              </div>
            )
          })
        ):""
      }
    </>
  )
}

export default Card