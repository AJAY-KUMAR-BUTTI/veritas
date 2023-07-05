import React from 'react'
import Cards from './Cards'

function Navbar() {
  return (
      <div className='d-flex'>
        <div className='card' style={{width : '12rem'}}>
          <div className=' card-body margins'>
            <h5>Veritas</h5>
            <div className='text-muted'>
                <h6 >MAIN MENU</h6>
                <h6><img src='https://cdn.onlinewebfonts.com/svg/img_177142.png' alt='' height='10px' width='10px'/>Dashboard</h6>
                <h6><i class="bi bi-people"></i>Users</h6>
                <h6><i class="bi bi-person-vcard-fill"></i>Accounts</h6>
                <h6><img src='https://cdn-icons-png.flaticon.com/128/876/876171.png' alt='' height='10px' width='10px'/>Statistics</h6>
            </div>
            <div className='text-muted mt-5 mb-5 pb-5'>
              <h5>TEAMS</h5>
              <h6><i class="bi bi-circle-fill first"></i>Marketing</h6>
              <h6><i class="bi bi-circle-fill second"></i>Dovelopement</h6>
            </div>
            <div className='mt-5 pt-5 text-muted'>
              <h6><i class="bi bi-gear"></i>Settings</h6>
              <h6><i class="bi bi-box-arrow-right"></i>LogOut</h6>
            </div>
        </div>
        </div>
          <Cards />
      </div>
  )
}

export default Navbar
