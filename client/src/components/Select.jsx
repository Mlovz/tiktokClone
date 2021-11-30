import React from 'react'

const Select = () => {
    return (
        <select className="form-select" aria-label="Default select example">
            <option selected>Все</option>
            <option value="2">Друзья</option>
            <option value="3">Приватное</option>
        </select>
    )
}

export default Select
