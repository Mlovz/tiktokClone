import React from 'react'

const CheckBox = ({txt, margin}) => {
    const style={
        margin: margin && margin
    }
    
    return (
        <div style={style} className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                {txt}
            </label>
        </div>
    )
}

export default CheckBox
