import './LinkSocial.css'

function LinkSocial ({ link }) {
  return (
    <li className="LinkSocial">
      <a href={link.url} target="_blank" rel="noreferrer">
        <img src={link.icon} alt={link.name} className="LinkSocial__icon" />
      </a>
    </li>
  )
}

export default LinkSocial
