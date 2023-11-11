import { Outlet } from 'react-router'
import { HARD_CODE_NAVIGATION_BAR } from 'shared/constants/navigation'
import NavBar from 'shared/ui/NavBar'

const WrapperNavbar = () => {
  return (
    <header>
      <NavBar
        navigations={HARD_CODE_NAVIGATION_BAR}
        brand={{ title: 'NFT Marketplace' }}
      />
      <Outlet />
    </header>
  )
}

export default WrapperNavbar
