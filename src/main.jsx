import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Routers from './Routers'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
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
    </Router>
</React.StrictMode>,
)
