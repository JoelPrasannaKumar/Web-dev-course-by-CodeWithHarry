import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className="card" style={{overflow:"hidden"}}>
        <img src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg" alt="" width={333} style={{border:"2px solid black"}} />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card
