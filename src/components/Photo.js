import './Photo.css'

function Photo({ user }) {
  return (
    <article className="Photo">
      <img className="Photo__img" src={user.photo} alt={user.name} />
      <h1 className="Photo__name">{user.name}</h1>
      <p className="Photo__position">{user.position}</p>
    </article>
  )
}

export default Photo
