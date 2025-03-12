import React, { Component } from 'react';

export default class User extends Component {
    render() {
        const {avatar_url, login, followers_url, html_url} = this.props.user;
        return (
            <div className="container py-3">
                <div className="card shadow-sm hover-shadow transition-all duration-300 border-0 rounded-lg">
                    <div className="card-body p-4">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img 
                                    className="rounded-circle img-fluid shadow-sm border border-light" 
                                    src={avatar_url} 
                                    alt={login}
                                    style={{aspectRatio: '1/1', objectFit: 'cover'}}
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="ps-md-4">
                                    <h3 className="mb-2 text-primary fw-bold">{login}</h3>
                                    <p className="text-muted mb-3">
                                        <i className="bi bi-people-fill me-2"></i>
                                        Followers: {followers_url.split('/').pop()}
                                    </p>
                                    <a 
                                        href={html_url} 
                                        className="btn btn-primary rounded-pill px-4 py-2 shadow-sm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-github me-2"></i>
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
