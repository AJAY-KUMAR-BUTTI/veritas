import React from 'react'

function Transactions() {
  return (
    <div>
      <div class="card ms-3 mt-3" style={{width: '60rem'}}>
        <div class="card-body">
            <div className='d-flex justify-content-between pt-3'>
                <h5 class="card-title"><b>Transactions</b></h5>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                    <input type="text" class="form-control" size='small' placeholder="search" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between me-5 pe-5'>
                <b>Reciever</b> <b>Type</b> <b>Status</b> <b>Date</b> <b>Amount</b>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <div className='ps-2'>
                    <input type='checkbox' /> 
                    <img src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' alt='' height='30px' width='30px' className='rounded ms-3' />            
                    <b>Emma Ryan Jr.</b> 
                </div>
                <b>Salary</b> <div id='pending' className='px-2 ms-5 me-5'>Pending</div> <b>Feb 19th,2023</b> <b>$3,892</b>
                <button id='details'>Details</button>
            </div> <hr />
            <div className='d-flex justify-content-between'>
                <div className='ps-2'>
                    <input type='checkbox' /> 
                    <img src='https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' height='30px' width='30px' className='rounded ms-3' />            
                    <b>Adrian Daren</b> 
                </div>
                <b>Bonus</b> <div id='done' className='px-2 ms-5 me-5'>Done</div> <b>Feb 18th,2023</b> <b>$1073</b>
                <button id='details'>Details</button>
            </div> <hr />
            <div className='d-flex justify-content-between'>
                <div className='ps-2'>
                    <input type='checkbox' /> 
                    <img src='https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' alt='' height='30px' width='30px' className='rounded ms-3' />            
                    <b>Roxanne Hills</b> 
                </div>
                <b>Salary</b> <div id='done' className='px-2 ms-5 me-5'>Done</div> <b>Apr 16th,2023</b> <b>$2,790</b>
                <button id='details'>Details</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
