import React from 'react'
import hulk from './../assets/hulk.jpg'

export const Card = () => {
  return (
    <>
      <div className="card">
        <img src={hulk} alt=""></img>
        <div className="title">
          <h3>Hulk</h3>
        </div>
      </div>
    </>
  )
}

export default Card