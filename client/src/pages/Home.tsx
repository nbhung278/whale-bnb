import { Suspense, lazy } from 'react'
import SliderBar from '../components/sliders/SliderBar'

const HomeContent = lazy(() => import('./homeContent'))
const Home = () => {
  return (
    <div className='h-[200vh] min-w-[600px]'>
      <SliderBar />
      <Suspense fallback={<p>Loading...</p>}>
        <HomeContent />
      </Suspense>
    </div>
  )
}

export default Home
