import React from 'react';

export const OverViewMenu = () =>
{
    return (
        <div className='container-fluid'>
            <div className='row align-items-center justify-content-start pt-5'>
                <div className='col-sm-1'>
                    <h5 className='font-weight-bold'>Overview</h5>

                </div>
                <div className='col-sm-1 mb-1'>
                    <div class="dropdown show border border-secondary" >
                        <a class="btn btn-default dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            NGN
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="/">Action</a>
                            <a class="dropdown-item" href="/">Another action</a>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-2'>
                </div>

                <div className='col-sm-2'>
                    <div class="dropdown show">
                        <a class="btn btn-default dropdown-toggle" href="/" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Last 7 days
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                            <a class="dropdown-item" href="/">Action</a>
                            <a class="dropdown-item" href="/">Another action</a>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-2'>
                    <div>Oct 08 2022</div>
                </div>
                <div className='col-sm-2'>
                    <div>Oct 15 2022</div>
                </div>
            </div>
        </div>
    )
}