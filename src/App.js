import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from './components/cart/Cart';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
export default class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                  <Navbar/>
                  <Switch>
                      <Route exact path='/' component={ProductList}/>
                      <Route path='/details' component={Detail}/>
                      <Route path='/cart' component={Cart}/>
                      <Route component={PageNotFound}/>
                  </Switch>
                </React.Fragment>
                <Modal/>
            </Router>
           
        )
    }
}
