import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EmptyCart extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-title'>
                        <h4>Không có sản phẩm nào trong giỏ hàng của bạn</h4>
                        <button className='btn btn-warning mt-5 mr-4 buyNow'>
                            <Link to='/' className='text-white'>
                                Đến Trang Chủ SHOP MOBILE
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
