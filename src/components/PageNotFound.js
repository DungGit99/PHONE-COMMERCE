import React, { Component } from 'react'

export default class PageNotFound extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-title '>
                        <h1 className='display-3'>404 error</h1>
                        <h2>Page Not Found</h2>
                        <h3>
                            The requested URL
                            <span className='text-danger'>
                                {this.props.location.pathname}
                            </span>
                            was not found
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
