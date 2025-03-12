import React, { Component } from 'react';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <i className="bi bi-github fs-3 me-2"></i>
                        <span className="fw-bold">{this.props.title}</span>
                    </a>
                </div>
            </nav>
        );
    }
}

