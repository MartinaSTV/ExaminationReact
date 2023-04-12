import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import AddCard from './views/AddCard'

function App() {

  const router = createBrowserRouter([
     {
      path: '/',
      element: < Home/>,
      errorElement: <Error />
    },
    {
      path: '/addCard',
      element: < AddCard/>,
      errorElement: <Error />
    },
  ])

  return (
    <div className="App">
     <RouterProvider router={  router }/>
    </div>
  )
}

export default App
