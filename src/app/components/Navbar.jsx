import React from 'react'

const Navbar = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen m-auto space-y-4">
            <div className="flex items-center justify-center">
                <h2 className=" big-text2   text-[200px]">4</h2>
                <img src="/StarDiv.png" alt="star" className="rotating-image w-[150px] h-auto mx-4 relative bottom-0" />
                <h2 className=" big-text2  text-[200px]">4</h2>
            </div>
            <h2 className="big-text2  italic text-center text-6xl">Page not found</h2>
        </div>



    )
}

export default Navbar