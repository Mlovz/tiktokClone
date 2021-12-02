import React from 'react'

const Button = ({variant, colorText, padding, color, fullWidth, onClick, size, disabled,margin, children }) => {

    
    const style = {
        border: variant === 'outlined' ? `1px solid ${color}` : `1px solid transparent` ,
        color: disabled ? '#dbdbdb' : variant === 'contained' ? '#fff' : colorText ? colorText : color ,
        background: disabled ? '#ccc' : variant === 'contained' ? color : '#fff',
        width: fullWidth && '100%',
        fontSize: size,
        pointerEvents: disabled && 'none',
        margin: margin && margin,
        padding: padding && padding
    }
    
    return (
        <button disabled={disabled} onClick={onClick} style={style} className='button'>
            {children}
        </button>
    )
}

export default Button
