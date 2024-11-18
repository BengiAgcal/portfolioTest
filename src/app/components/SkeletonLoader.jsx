import React from 'react'

const SkeletonLoader = () => {
  return (
    <section> 
        <div className='w-full h-max bg-zinc-600 flex justify-center items-center'>
            <p className='text-xl text-white big-text3'>Loading Media...</p>
        </div>
    </section>
  )
}

export default SkeletonLoader