import React from 'react'
import { Suspense } from 'react'
import { list } from '@vercel/blob'
import SkeletonLoader from './SkeletonLoader'

const VidBlob = ( src, videoRef) => {
  return (
    <Suspense fallback={<SkeletonLoader/>}>
        <VideoComponent src={src} videoRef={videoRef}/>
      </Suspense>
  )
}

async function VideoComponent({ src, videoRef }) {
    const { blobs } = await list({
      prefix: src,
      limit: 2,
    })
    const { url } = blobs[0]
   
    return (
      <video ref={videoRef} autoPlay controls preload="none" aria-label="Video player" className='w-full h-auto'>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }
export default VidBlob