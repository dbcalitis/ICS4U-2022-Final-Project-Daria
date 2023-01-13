import React from 'react'
import style from './Card.css';

export const Card = ({data}) => {
  return (
    <>
      {
        (data)?(
          data.map(item=>{
            return(
              <div className="card" id="img_wrapper">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""></img>
                <div className='description'><p>{(item.description)? item.description : 'No description'}</p></div>
                <div className="block"></div>
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