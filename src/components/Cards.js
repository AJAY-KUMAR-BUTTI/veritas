import React from 'react';
import IncomeStatic from './IncomeStatic';
import RecentPayments from './RecentPayments';

function Cards() {
  return (
    <div className='lightGrey'>
        <div className='p-3'>  
            <b id='title'>Analytics</b> <button className='rounded-pill bg-light ps-4 pe-5 ms-5 border fw-bold '>Full Statistics</button> <input type='button' value='Result Summary' id='empty'className='result px-3 rounded-pill border'/>
            <span className='float-end pe-5'>
                <input type='button' value='+'  id='add' />
                <img src='https://media.istockphoto.com/id/1482289740/photo/how-to-increase-your-chances-of-landing-a-job-offer.jpg?s=2048x2048&w=is&k=20&c=oU_a2IScwTv1liOAorCf9BWSogoZZJcxPpf8PU0dPLg='alt='' id='img' className='img ms-2' height='40px' width='40px' />
            </span>
        </div>
        <div className='d-flex mb-0'>
            <div class="card ms-3 mb-5" style={{width: '15rem', height : '180px', border : 'dashed 1px black', borderRadius : '20px'}}>
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                    <h5 class="card-title">Team Payments</h5>
                    <i class="bi bi-bell-fill"></i>
                    </div>
                    <p><i class="bi bi-calendar-date-fill mb-5 "></i>07 Dec approval</p>
                    <div className='mt-5'>
                        <img src='https://img.huffingtonpost.com/asset/60c8f926260000df13519e9a.jpeg?ops=scalefit_720_noupscale&format=webp'alt='' id='img' className='img' height='40px' width='40px' />
                        <img src='https://www.lyrahealth.com/wp-content/uploads/2020/07/SupportBlackEmployees.jpeg'alt='' className='img' height='40px' width='40px'/>
                        <img src='https://www.libertystaffing.ca/hubfs/4_Types_of_Office_Positions_to_Consider.jpg'alt='' id='img1' className='img' height='40px' width='40px' />
                        <span className='mt-5 span'>25+</span>
                    </div>
                </div>
            </div>
            <IncomeStatic />
        </div>
        <RecentPayments />
    </div>
  )
}

export default Cards
