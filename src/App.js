import './App.css'
import Photo from './components/Photo.js'
import SocialMedias from './components/SocialMedias.js'
import Links from './components/Links.js'

import data from './data/user.json'

function App () {
  const user = data.user

  return (
    <div className="App">
      <Photo userPhoto={user.photo} userName={user.name} />
      <Links links={user.links} />
      <SocialMedias social={user.socialMedias} />
    </div>
  )
}

export default App
