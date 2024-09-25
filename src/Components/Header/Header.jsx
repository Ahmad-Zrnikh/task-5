import CardsOne from "../CardsOne/CardsOne"
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="firstCol">
        <div className="big">
        <p>Discover a place</p>
        <p>you will love to live</p>
        </div>
        <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="small">Imperdiet tempus felis vitae sit est quisque.</p>
        <CardsOne/>
      </div>
      <img className="image" src="images/modern-residential-building-transformed 1.png" alt="" />
    </div>
  )
}
