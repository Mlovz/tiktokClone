import React, { forwardRef } from 'react'

const Select = forwardRef((props, ref) => {
    return (
        <select className="form-select" {...props} ref={ref} aria-label="Default select example">
            <option defaultValue="Все">Все</option>
            <option defaultValue="Друзья">Друзья</option>
            <option defaultValue="Приватное">Приватное</option>
        </select>
    )
})

export default Select
