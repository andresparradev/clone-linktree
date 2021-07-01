import './Links.css'
import Link from './Link.js'

function Links({ links }) {
  return (
    <div className="Links">
      <ul className="Links__menu">
        {links.map((link, i) => (
          <Link key={i} link={link} />
        ))}
      </ul>
    </div>
  )
}

export default Links
