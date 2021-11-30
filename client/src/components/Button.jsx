import React from 'react'

const Button = ({variant, colorText, color, fullWidth, onClick, size, disabled,margin, children }) => {

    
    const style = {
        border: variant === 'outlined' ? `1px solid ${color}` : 'none',
        color: disabled ? '#dbdbdb' : variant === 'contained' ? '#fff' : color ,
        background: disabled ? '#ccc' : variant === 'contained' ? color : '#fff',
        width: fullWidth && '100%',
        fontSize: size,
        pointerEvents: disabled && 'none',
        margin: margin && margin,
        color: colorText ? colorText : '#fff'
    }
    
    return (
        <button disabled={disabled} onClick={onClick} style={style} className='button'>
            {children}
        </button>
    )
}

export default Button
