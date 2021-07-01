import './SocialMedias.css'
import LinkSocial from './LinkSocial.js'

function SocialMedias({ social }) {
  return (
    <article className="SocialMedias">
      <ul className="SocialMedias__menu">
        {social.map((link, i) => (
          <LinkSocial key={i} link={link} />
        ))}
      </ul>
    </article>
  )
}

export default SocialMedias
