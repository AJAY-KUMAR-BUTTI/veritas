import React from 'react'

function Choose() {
  return (
    <div>
      <div class="card ms-3" style={{width: '15rem', height : '220px', boxShadow : '10px 10px 10px 10px grey', borderRadius : '20px',overflow : 'hidden', 
    float : 'none'}}>
                <div className='green ps-3 pt-2 text-light'>
                    <h4>$95.9<i class="bi bi-stars"></i></h4>
                    <h6 className='text-muted'>Per Month</h6>
                    <h5 class="card-title">Choose Best Plan</h5>
                    <h5>For You!</h5>
                </div>
            <div class="card-body p-4">
                <b>Details</b>
                <button id='btn'>Upgrade</button>
            </div>
        </div>
    </div>
  )
}

export default Choose
