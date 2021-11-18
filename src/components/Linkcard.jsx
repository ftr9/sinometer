import './Linkcard.css'

const Linkcard = ({ link, imageLink, gamename }) => {
  return (
    <a className="Linkcard" href={link}>
      <div className="Linkcard__imageContainer">
        <img src={imageLink} alt={gamename} />
      </div>
      <div className="Linkcard__name">{gamename}</div>
    </a>
  )
}

export default Linkcard
