import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Routers from './Routers'
import './index.css'

const Loading = () => {
  return (
    <div className='fixed w-screen h-screen z-[4444] flex items-center justify-center'>
        <p className='text-center text-[16px] animate-pulse'>Loading....</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loading />}>
          <Routes>
            {
              Routers.map((router, index) => (
                <Route  
                  key={index}
                  path={router.path}
                  element={<router.component />}
                />
              ))
            }
          </Routes>
        </Suspense>
    </Router>
</React.StrictMode>,
)
