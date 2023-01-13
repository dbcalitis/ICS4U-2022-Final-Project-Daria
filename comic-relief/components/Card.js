import React from 'react'

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
                    <h4>{(!item.name)? item.title : item.name}</h4>
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