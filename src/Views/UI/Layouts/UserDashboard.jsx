import React from 'react'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-12">
      {/* <Sidebar /> */}
      <div className="">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  )
}

export default UserDashboard