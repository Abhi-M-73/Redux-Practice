import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='w-full h-10 border-b-2 border-black '>
            <div className='max-w-screen-xl mx-auto flex items-center justify-center gap-5 '>
                <Link  className='font-semibold text-2xl' to={"/"}>Home</Link>
                <Link  className='font-semibold text-2xl' to={"/user"}>User</Link>
                <Link className='font-semibold text-2xl'  to={"/product"}>Product</Link>
            </div>
            


        </div>
    )
}

export default Nav
