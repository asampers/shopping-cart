import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <Navbar />
      <h1 className='text-center'>Shopping Cart App</h1>
      <Outlet />
    </>
  )
}

export default Root
