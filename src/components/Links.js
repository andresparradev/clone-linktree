import './Links.css'

function Links ({ links }) {
  return (
    <div className="Links">
      <ul className="Links__menu">
        {
          links.map((el, index) => {
            return <li key={index} className="Links__item">
              <a href={el.url} target="_blank" rel="noreferrer">
                { el.icon && <img src={el.icon} alt={el.name} className="Links__icon" /> }
                <span className="Links__name">{el.name}</span>
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Links
