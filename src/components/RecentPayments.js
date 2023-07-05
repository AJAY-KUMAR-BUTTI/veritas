import React from 'react'
import Transactions from './Transactions'

function RecentPayments() {
  return (
    <>
    <h6 className='ms-5'>Recently Payments</h6>
    <div className='ms-4 ps-4 d-flex'>
      <div class="card" style={{width: '25rem', borderRadius : '20px'}}>
        <div class="card-body d-flex">
          <div className='m-0 p-0'>
            <img src='https://images.ctfassets.net/i5wc420v2vd1/1V2bBRoXIIuiG0IgmcSogE/554b908ac395412857b76f46e7d7379f/Web-7129.jpg' alt='' height='30px' width='30px' className='rounded' />
          </div>  
            <b className='ms-0' id='emma'>Emma Ryan Jr. <br /><span>Mar 9,2023</span></b> 
            
             <b className='currency ms-4'>$4,823</b>    <div id='done' className='px-2 ms-5 me-5'>Done</div>   <i class="bi bi-three-dots"></i>
        </div>
      </div>
      <div class="card ms-5" style={{width: '25rem', borderRadius : '20px'}}>
        <div class="card-body d-flex">
          <div className='m-0 p-0'>
            <img src='https://images.ctfassets.net/i5wc420v2vd1/1V2bBRoXIIuiG0IgmcSogE/554b908ac395412857b76f46e7d7379f/Web-7129.jpg' alt='' height='30px' width='30px' className='rounded' />
          </div>  
            <b className='ms-0' id='emma'>Emma Ryan Jr. <br /><span>Mar 9,2023</span></b> 
             <b className='currency ms-4'>$4,823</b>    <div id='pending' className='px-2 ms-5 me-5'>Pending</div>   <i class="bi bi-three-dots"></i>
        </div>
      </div>
    </div>
    <Transactions />
    </>
  )
}

export default RecentPayments
