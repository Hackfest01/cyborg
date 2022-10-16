import React from 'react';

export const OverViewGeneralInfo = () =>
{
    return <div className="container-fluid">
        <div className='row align-items-center justify-items-center border_grey'>
            <div className='col-sm-12 px-5 my-3'>
                <p className=' mb-0'>Company Name</p>
                <p className='font-weight-bolder'>Cyborg group</p>

                <div className='row align-items-center justify-content-center'>
                   <div className='col-sm-6'>
                        <p className=' mb-0'>Wallet Address</p>
                        <p className='font-weight-bolder'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
    
                      

                   </div>  
                   <div className='col-sm-6'>
                        
    
                        <p className=' mb-0'>Balance</p>
                        <h4 className='font-weight-bolder'>NGN 0.00</h4>

                   </div>   
                </div>

                <button className='btn btn-success btn-large p-3 px-5 withdraw_button'>Withdraw</button>
            </div>

        </div>

    </div>
}