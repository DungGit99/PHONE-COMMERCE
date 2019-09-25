import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className='container-fluid text-center d-none d-lg-block'>
                <div className='row mt-5'>
                    <div className='col-10 mx-auto col-lg-4'>
                        <p className='text-uppercase'>Sản Phẩm</p>
                    </div>
                    <div className='mx-auto col-lg-8'>
                        <div className='row'>
                            <div className='col-10 mx-auto col-lg-2'>
                                <p className='text-uppercase'>Đơn Giá</p>
                            </div>
                            <div className='col-10 mx-auto col-lg-2'>
                                <p className='text-uppercase'>Số Lượng</p>
                            </div>
                            <div className='col-10 mx-auto col-lg-2'>
                                <p className='text-uppercase'>Thao Tác</p>
                            </div>
                            <div className='col-10 mx-auto col-lg-2'>
                                <p className='text-uppercase'>Tổng Tiền</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
