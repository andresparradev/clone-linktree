import './SocialMedias.css'

function SocialMedias ({ social }) {
  return (
    <article className="SocialMedias">
      <ul className="SocialMedias__menu">
        {
          social.map((el, index) => {
            return <li key={index} className="SocialMedias__item">
              <a href={el.url} target="_blank" rel="noreferrer">
                <img src={el.icon} alt={el.name} className="SocialMedias__icon" />
              </a>
            </li>
          })
        }
      </ul>
    </article>
  )
}

export default SocialMedias
