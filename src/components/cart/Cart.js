import React, { Component } from 'react';
import CartColumns from './CartColumns' ;
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import {ProductConsumer} from '../../context';
import CartTotal from './CartTotal';
export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {
                        value=>{
                            const {cart}=value;
                            if(cart.length>0){
                                return (
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotal value={value} history={this.props.history}/>
                                </React.Fragment>
                                )
                            }else{
                                return  <EmptyCart/>
                            }
                        }
                    }
                </ProductConsumer>
               
            </div>
        )
    }
}
