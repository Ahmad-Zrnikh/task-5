import "./BestDeal.css"
import ImageBest from "./ImageBest"

export default function BestDeal() {
  return (
    <div className="bestdeal">
        <div className="buttons">
        <div className="active2">Residential Property</div>
        <div>Commercial Property</div>
        <div>Agriculture Property</div>
        <div>Industrial Property</div>
        </div>
<div className="images">
    <ImageBest src="images/Image 03 (1).png"/>
    <ImageBest src="images/Card 02.png"/>
    <ImageBest src="images/Image 01.jpg"/>
</div>
        
    </div>
  )
}
