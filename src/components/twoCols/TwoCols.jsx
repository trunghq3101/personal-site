import React from 'react'

export default (props) => (
    <div className="row justify-content-center align-items-center">
        <div className="col-4 col-sm-2">
            {props.left}
        </div>
        <div className="col-8 col-sm-4">
            {props.right}
        </div>
    </div>
)
