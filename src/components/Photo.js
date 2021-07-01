import './Photo.css'

function Photo ({ userPhoto, userName }) {
  return (
    <article className="Photo">
      <img className="Photo__img" src={userPhoto} alt={userName} />
      <h1 className="Photo__name">{userName}</h1>
    </article>
  )
}

export default Photo
