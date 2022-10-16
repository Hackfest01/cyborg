import React from 'react';
import './overview.css'
import { NavLink } from 'react-router-dom';
export const OverViewNav = () =>
{
    return (
        <div className='container-fluid '>
            <div className='row align-items-start justify-items-center  '>
                <div className='col-sm-12 mt-5 text-white view_height_100'>
                    <NavLink to='/home' className={'text-white'}> <div><h5>Home</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}> <div> <h5>Transactions</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div><h5>Customers</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div><h5>Balances</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div><h5>Store</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div><h5>Payments</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div><h5>Subaccounts</h5></div></NavLink>
                    <NavLink to='/home' className={'text-white'}>  <div><h5>Settings</h5></div></NavLink>


                </div>
            </div>
        </div>
    )
}