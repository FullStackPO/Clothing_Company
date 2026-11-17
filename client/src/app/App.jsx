import React from 'react'
import { route } from './app.routes.jsx'
import { RouterProvider } from 'react-router'

const App = () => {
  return (
    <RouterProvider router={route} />
  )
}

export default App
