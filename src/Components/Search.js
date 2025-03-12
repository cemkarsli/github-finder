import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.keyword === '') {
            this.props.DisplayAlert('Lütfen bir anahtar kelime giriniz', 'danger');
        } else {
            this.props.searchUsers(this.state.keyword);
            this.setState({ keyword: '' })
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <form onSubmit={this.onSubmit} className="mb-3">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    value={this.state.keyword} 
                                    onChange={this.onChange}
                                    className="form-control form-control-lg shadow-none border" 
                                    placeholder="Github kullanıcısı ara..."
                                />
                                <button type="submit" className="btn btn-primary px-4">
                                    <i className="bi bi-search me-2"></i>
                                    Ara
                                </button>
                            </div>
                        </form>
                        {
                            this.props.showClear && 
                            <button 
                                onClick={this.props.clearResults} 
                                className="btn btn-outline-danger w-100"
                            >
                                <i className="bi bi-trash me-2"></i>
                                Sonuçları Temizle
                            </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
