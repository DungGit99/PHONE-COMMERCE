import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Paypal from './Paypal';
export default class CartTotal extends Component {
    render() {
        const {cartSubTotal,cartTax,cartTotal,clearCart}=this.props.value;
        return <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
                            <Link to='/'>
                                <button type='button' onClick={()=>clearCart()} className='btn btn-outline-danger text-uppercase mb-3 px-5'>
                                    Xóa tất cả sản phẩm
                                </button>
                            </Link>
                            <h5>
                                <span className='text-title'>Tổng Tiền :</span>
                                <strong>{cartSubTotal} $</strong>
                            </h5>
                            <h5>
                                <span className='text-title'>Thuế VAT :</span>
                                <strong>{cartTax} $</strong>
                            </h5>
                            <h5>
                                <span className='text-title'>Tổng Thanh Toán :</span>
                                <strong>{cartTotal} $</strong>
                            </h5>
                            <Paypal total={cartTotal} clearCart={clearCart} history={this.props.history}/>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    }
}
