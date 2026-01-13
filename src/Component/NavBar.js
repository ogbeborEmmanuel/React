import React from 'react'

const NavBar = ({ user }) => {
    const { name, age } = user;
    return (
        <div><h1>{name.toUpperCase()} is {age} years old
        </h1></div>
    )
}

export default NavBar