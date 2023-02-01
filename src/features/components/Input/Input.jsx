import React from 'react'

const Input = ({ name, type, className1, className2, className3 }) => {
    return (
        <>
            <input type={type} name={name} className={className1} />
        </>
    )
}

export default Input
