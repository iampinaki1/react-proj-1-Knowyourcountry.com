import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Error() {
const err = useRouteError()
  return (
<NavLink to='/'> <div className='w-screen h-screen flex justify-center items-center flex-col  text-3xl'><div><span className='text-pink-400'>Error Occcured</span>({err && err.message}) <p>
    click anywhere and redirect to home page</p></div>
    <i class="ri-error-warning-fill"></i>
    </div>
</NavLink>
  )
}

export default Error