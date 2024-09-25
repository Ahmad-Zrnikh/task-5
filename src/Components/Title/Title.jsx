import "./Title.css"

export default function Title({bigtitle , smalltitle}) {
  return (
    <div className="title">
        <p className="bigTitle">{bigtitle}</p>
        <p className="smallTitle">{smalltitle}</p>
    </div>
  )
}
