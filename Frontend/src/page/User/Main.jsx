import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Nav'

export default function Main() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
