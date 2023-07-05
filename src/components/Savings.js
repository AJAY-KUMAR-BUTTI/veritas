import React from 'react'
import Choose from './Choose'

function Savings() {
  return (
    <div className='d-flex'>
      <div class="card ms-3" style={{width: '15rem', height : '180px', border : 'dashed 1px black', borderRadius : '20px'}}>
        <div class="card-body">
            <h5 class="card-title"><img src='https://cdn.statcdn.com/Statistic/1325000/1328773-blank-754.png' alt='' id='perc' />Savings</h5>
            <img src='https://www.nicepng.com/png/detail/217-2175651_stock-market-boom-general-electric-stock-1920.png' alt='' id='sensex' />
            <h5 className='mb-0 mt-3'>$5,839</h5>
            <img src='https://d28wu8o6itv89t.cloudfront.net/images/blackfridayformarketsjpg-1584077211002.jpeg'alt='' id='stack' /><b><span id='savings'>-11% </span>last week</b>
            <i class="bi bi-arrow-right-square-fill mb-0"></i>
        </div>
        </div>
        <Choose />
    </div>
  )
}

export default Savings
