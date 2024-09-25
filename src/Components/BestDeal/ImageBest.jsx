import "./ImageBest.css"

export default function ImageBest({src}) {
  return (
    <div className="imagebest">
        <img src={src} alt="" />
        <button className="btnOne">Featured</button>
        <button className="btnTwo">3D</button>
    </div>
  )
}
