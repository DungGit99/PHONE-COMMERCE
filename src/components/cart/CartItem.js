import React, { Component } from 'react'
export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem } = this.props.value;
        return (
            <div className='row my-1 text-capitalize text-center'>
                <div className='col-10 mx-auto col-lg-4'>

                    <img
                        src={img}
                        className='img-fluid' alt='product'
                    />
                    <span className=''><strong>{title}</strong></span>
                </div>
                <div className='col-10 mx-auto col-lg-8'>
                    <div className='row'>
                        <div className='col-10 mx-auto col-lg-2'>
                            <span> <strong className='d-lg-none'>price:</strong>
                                {price}$
                            </span>
                        </div>
                        <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <span onClick={() => decrement(id)} className='btn btn-black mx-1'>
                                        -
                                     </span>
                                    <span >
                                        {count}
                                    </span>
                                    <span onClick={() => increment(id)} className='btn btn-black mx-1'>
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='col-10 mx-auto col-lg-2'>
                            <div className='cart-icon' onClick={() => removeItem(id)}>
                                <i className='fa fa-trash'></i>
                            </div>
                        </div>

                        <div className='col-10 mx-auto col-lg-2'>
                            <span > <strong className='d-lg-none'>Tổng Tiền:</strong>
                                {total}$
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
