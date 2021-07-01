import './Link.css'

function Link ({ link }) {
  return (
    <li className="Link">
      <a href={link.url} target="_blank" rel="noreferrer">
        { link.icon && <img src={link.icon} alt={link.name} className="Link__icon" /> }
        <span className="Link__name">{link.name}</span>
      </a>
    </li>
  )
}

export default Link
