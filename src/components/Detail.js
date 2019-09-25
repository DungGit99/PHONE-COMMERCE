import React, { Component } from 'react';
import { ProductConsumer } from '../context';

import {ButtonContainer} from '../components/button';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {id,company,img,info,price,title,inCart}=value.detailProduct;
                        return(
                            <div className='container py-5'>
                                <div className='row'>
                                    <div className='col-10 mx-auto text-center my-5'>
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* end title */}

                                <div className='row'>
                                    <div className='col-10 mx-auto0 col-md-6 my-3 text-capitalize'>
                                        <img src={img} className='img-fluid' alt='product'/>
                                    </div>
                                    <div className='col-10 mx-auto0 col-md-6 my-3 text-capitalize'>
                                        
                                        <h4 className='text-capitalize font-weight-bold mt-3 mb-0'>
                                            Giá :
                                            <span> {price}$</span>
                                        </h4>
                                        <h4 className='text-capitalize font-weight-bold mt-3 mb-0'>
                                            Đánh giá chi tiết : 
                                        </h4>
                                        <p className='text-muted lead'>{info}</p>
                                        <button className='btn btn-warning  mr-4 buyNow'>Mua Ngay</button>
                                        <button className='btn btn-danger mr-4 buyNow' onClick={()=>{ value.addToCart(id);value.openModal(id);}}>
                                            {inCart? 'inCart':'Thêm Vào Giỏ Hàng'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
