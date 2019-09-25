import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './button';
import styled from 'styled-components';
import logo from '../logo.png'
class Navbar extends Component {
    render() {
        return (
            <NavWraper className='navbar navbar-expand-sm navbar-dark px-sm-5 '>
                <Link to='/'>
                    <img src={logo} className='navbar-brand logoPhone' alt='#' />
                </Link>
                <ul className='navbar-nav align-item-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Trang Chủ
                        </Link>
                    </li>
                   
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className="fa fa-cart-plus" aria-hidden="true"> Giỏ Hàng</i>
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWraper>

        )
    }
}
    const NavWraper =styled.nav`

    `

export default Navbar;