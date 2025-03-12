import React, { Component } from 'react';
import User from './User';
import Loading from './Loading';


export default class UserList extends Component {
   
    render() {
        if(this.props.loading) {
            return <Loading />;
        }
        return (
            <div className="container py-4">
                <div className="row g-4">
                    {this.props.users.map((user) => (
                        <div className="col-md-6 col-lg-4" key={user.id}>
                            <User user={user} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


