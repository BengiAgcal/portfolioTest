import React from 'react'

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen m-auto">
            
            <img src="/StarDiv.png" alt="star" className="rotating-image my-4" />
            <h2 className="text-center w-full text-6xl">Loading...</h2>
        </div>
    );
}