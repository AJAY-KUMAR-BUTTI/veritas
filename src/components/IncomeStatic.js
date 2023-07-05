import React from 'react'
import Savings from './Savings'

function IncomeStatic() {
  return (
    <div className='d-flex'>
      <div class="card ms-3" style={{width: '15rem', height : '180px', borderRadius : '20px'}}>
            <div class="card-body">
                <h5 class="card-title">Income Statistics</h5>
                <b id='inc'>+8%</b>
                <div className='d-flex'>
                    <div className='mt-3'>
                        <h6>$2m</h6>
                        <h6>$1m</h6>
                        <h6>$0m</h6>
                    </div>
                    <div className='ms-3 d-flex align-items-end'>
                        <button className='btn btn-info' id='one'>15%</button>
                        <button className='btn' id='two'>21%</button>
                        <button className='btn' id='three'>32%</button>
                    </div>
                </div>
            </div>
        </div>
        <Savings />
    </div>
  )
}

export default IncomeStatic
