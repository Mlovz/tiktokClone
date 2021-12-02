import React, { forwardRef } from 'react'

const CheckBox = forwardRef((props, ref) => {
    const style={
        margin: props.margin && props.margin
    }
    
    return (
        <div style={style} className="form-check">
            <input className="form-check-input" ref={ref} {...props}/>
            <label className="form-check-label" htmlFor={props.id}>
                {props.txt}
            </label>
        </div>
    )
})

export default CheckBox
