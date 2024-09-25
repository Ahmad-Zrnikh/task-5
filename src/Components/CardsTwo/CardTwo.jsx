import "./CardTwo.css"

export default function CardTwo({src , title}) {
  return (
    <div className="cardTwo">
<img src={src} alt="" />
<p className="title2">{title}</p>
<p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</p>
    </div>
  )
}
