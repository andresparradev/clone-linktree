import './LinkSocial.css'
import IconSocialMedia from './IconSocialMedia'

function LinkSocial({ link }) {
  console.log(link.name.toLowerCase())
  return (
    <li className="LinkSocial">
      <a href={link.url} target="_blank" rel="noreferrer">
        <div className="LinkSocial__icon">
          <IconSocialMedia icon={link.name.toLowerCase()} size="2x" />
        </div>
      </a>
    </li>
  )
}

export default LinkSocial
