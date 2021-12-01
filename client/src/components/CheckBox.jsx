import React from 'react'

const CheckBox = ({txt, margin, id}) => {
    const style={
        margin: margin && margin
    }
    
    return (
        <div style={style} className="form-check">
            <input className="form-check-input" type="checkbox" id={id}/>
            <label className="form-check-label" htmlFor={id}>
                {txt}
            </label>
        </div>
    )
}

export default CheckBox
