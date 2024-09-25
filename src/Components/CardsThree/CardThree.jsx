import "./CardThree.css"

export default function CardThree({src}) {
  return (
    <div className="CardThree">
        <img className="img" src={src} alt="" />
        <div className="text3"><p className="price">$300000</p>
        <p >Luxury Apartment in
California</p></div>
<div className="location"><img src="images/location2.png" alt="" />1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
    </div>
  )
}
