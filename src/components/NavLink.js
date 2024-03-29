import React from 'react'
import { Link } from 'gatsby';

const LinkStyles = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 8px',
    padding: '0.25rem',
    fontSize: '14px',
    display: 'block',
    borderBottom: '2px solid transparent'
}

const activeStyles = {
    borderBottom: '2px solid #45BAFC',
}

const NavLink = ({ children, to }) => (
    <Link to={to} style={LinkStyles} activeStyle={activeStyles}>
        {children}
    </Link>
)

export default NavLink