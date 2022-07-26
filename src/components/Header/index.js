import React from 'react'

const Header = ({navigate}) => {
    return (
        <div onClick={() => navigate(-1)} className=" cursor-pointer w-full h-14 flex items-center px-5 border-b-2 border-black/10 shadow-md">
            <span > Back </span>
        </div>
    )
}

export default Header