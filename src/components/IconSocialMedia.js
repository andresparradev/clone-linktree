import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
  faFacebook,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'


function IconSocialMedia({ icon, size = '1x' }) {
  let i = faFacebook

  if(icon === 'facebook') {
    i = faFacebook
  } else if(icon === 'twitter') {
    i = faTwitter
  } else if(icon === 'instagram') {
    i = faInstagram
  } else if(icon === 'linkedin') {
    i = faLinkedin
  } else if(icon === 'youtube') {
    i = faYoutube
  } else if(icon === 'github') {
    i = faGithub
  }

  return <FontAwesomeIcon icon={i} size={size} />
}

export default IconSocialMedia
