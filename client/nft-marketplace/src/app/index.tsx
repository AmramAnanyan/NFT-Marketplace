import NavBar from 'shared/ui/NavBar'
import './index.scss'
import Routes from 'app/Routing'
import { HARD_CODE_NAVIGATION_BAR } from 'shared/constants/navigation'
import ButtonUI from 'shared/ui/ButtonUI'
import RocketLaunch from 'shared/assets/pngIcon/RocketLaunchWhit.png'

const App = () => {
  return (
    <div>
      <NavBar
        navigations={HARD_CODE_NAVIGATION_BAR}
        brand={{ title: 'NFT Marketplace' }}
        userStatus={{ title: 'Sign up', status: 'GUEST' }}
      />
      <Routes />
    </div>
  )
}

export default App
