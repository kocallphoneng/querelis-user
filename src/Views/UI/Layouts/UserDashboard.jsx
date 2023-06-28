import React from 'react'

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default UserDashboard