import { Outlet } from 'react-router'
import {
  HARD_CODE_FOOTER_NAVIGATION,
  HARD_CODE_NAVIGATION_BAR
} from 'shared/constants/navigation'
import Footer from 'shared/ui/Footer'
import NavBar from 'shared/ui/NavBar'

const WrapperNavbar = () => {
  return (
    <header>
      <NavBar
        navigations={HARD_CODE_NAVIGATION_BAR}
        brand={{ title: 'NFT Marketplace' }}
      />
      <Outlet />
      <Footer navigations={HARD_CODE_FOOTER_NAVIGATION} />
    </header>
  )
}

export default WrapperNavbar
