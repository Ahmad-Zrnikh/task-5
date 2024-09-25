import "./CardOne.css"

export default function CardOne({icon , title , name}) {
  return (
    <div className="cardOne">
        <div className="icon"><img src={icon} alt="" /></div>
        <div className="text">
            <p className="one">{title}</p>
            <p className="two">{name}</p>
        </div>
        {/* <img src="images/dollar-circle.png" alt="" /> */}
    </div>
  )
}
