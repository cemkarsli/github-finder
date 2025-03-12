import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="ms-3 fs-4 text-primary">Yükleniyor...</div>
            </div>
        )
    }
}
