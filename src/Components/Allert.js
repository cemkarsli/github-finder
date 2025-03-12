import React from 'react'

const Allert = (props) => {
    return (
        props.error && (
            <div className="container mt-3">
                <div className={`alert alert-${props.error.type} d-flex align-items-center shadow-sm border-0`} role="alert">
                    <i className={`bi bi-exclamation-triangle-fill me-2 ${props.error.type === 'success' ? 'text-success' : 'text-danger'}`}></i>
                    <div>{props.error.msg}</div>
                </div>
            </div>
        )
    )
}

export default Allert