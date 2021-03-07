import { NavLink } from 'react-router-dom';
import React from 'react';
import './Menu.css';

export default function Menu() {
    return (
        <ul className="menu">
            <NavLink to="/all" >
                <li>List of posts</li>
            </NavLink>
            <NavLink to="/all/new">
                <li>New post</li>
            </NavLink>
        </ul>
    );
}
