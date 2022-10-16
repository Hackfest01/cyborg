import React from 'react';
import { OverViewMenu } from './overview_menu';
import { OverViewNav } from './overview_nav';
import './overview.css'
import { OverViewGeneralInfo } from './overview_general_info';
import { OverviewTransactionHistory } from './overview_transaction_history';


export const OverView = () =>
{
    return (
        <div className='container-fluid'>
            <div className='row align-items-start justify-content-center '>
                <div className='col-sm-2 pt-5 overview_nav'>

                    <OverViewNav />
                </div>
                <div className='col-sm-10'>
                   <div className='mx-5'> <OverViewMenu /></div>
                    <div className='mx-5'>
                        <OverViewGeneralInfo />

                    </div>
                    <div className='mx-5 mt-5'><OverviewTransactionHistory />
                    </div>
                </div>
            </div>
        </div>
    )
}