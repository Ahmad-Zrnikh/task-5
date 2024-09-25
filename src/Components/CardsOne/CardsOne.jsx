import CardOne from "../CardOne/CardOne"
import "./CardsOne.css"

export default function CardsOne() {
  return (
    <div className="cardsOne">
        <CardOne icon="images/location1.png" title="Location" name="Ahmedabad, India"/>
        <CardOne icon="images/dollar-circle.png" title="Price" name="$1000 - $10,000"/>
        <CardOne icon="images/house.png" title="Type of Property" name="Apartment"/>
    </div>
  )
}
