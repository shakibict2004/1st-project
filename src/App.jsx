
import './App.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Layout from './components/root/Layout'
import Service from './pages/Service'

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element = {<Layout/>}>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/service' element = {<Service/>}></Route>
    </Route>
  ))
  return (
    <>
  <RouterProvider router = {router}/>
    </>
  )
}

export default App
