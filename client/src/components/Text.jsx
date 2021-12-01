import React from 'react'

const Text = ({txt, margin, fw, size}) => {
    const style = {
        margin: margin && margin,
        fontSize: size && size,
        fontWeight: fw && fw
    }
    
    return (
        <p style={style}>
            {txt}
        </p>
    )
}

export default Text
