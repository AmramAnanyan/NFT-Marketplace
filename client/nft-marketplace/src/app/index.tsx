import { Suspense } from 'react'
import './index.scss'
import Routes from 'app/Routing'

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </div>
  )
}

export default App
