import React from 'react'
import { useRouteError } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Error() {
const err = useRouteError()
  return (
<NavLink to='/'> <div className='w-screen h-screen'>Error Occcured {err && err.message} <p>
    click anywhere to redirect to home page</p></div>
</NavLink>
  )
}

export default Error