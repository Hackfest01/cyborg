import React from 'react';
import './overview.css'
import { NavLink } from 'react-router-dom';
export const OverViewNav = () =>
{
    return (
        <div className='container-fluid '>
            <div className='row align-items-start justify-items-center  '>
                <div className='col-sm-12 mt-5 text-white view_height_100'>
                    <NavLink to='/home' className='text-white'> <div className='mb-3'><h5>Home</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}> <div  className='mb-3'> <h5>Transactions</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div className='mb-3'><h5>Customers</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div className='mb-3'><h5>Balances</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div className='mb-3'><h5>Store</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div className='mb-3'><h5>Payments</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div className='mb-3'><h5>Subaccounts</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div className='mb-3'><h5>Settings</h5></div></NavLink>


                </div>
            </div>
        </div>
    )
}