
import { ReactLenis } from "../utils/Lenis";
import { Suspense } from 'react'
import { list } from '@vercel/blob'
import SkeletonLoader from '../components/SkeletonLoader'



export default function Page() {
    return (
      <Suspense fallback={<SkeletonLoader/>}>
        <VideoComponent fileName="AR" />
      </Suspense>
    )
  }
   
  async function VideoComponent({ fileName }) {
    const { blobs } = await list({
      prefix: fileName,
      limit: 1,
    })
    const { url } = blobs[0]
   
    return (
      <video controls preload="none" aria-label="Video player">
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

// <MovingImg imageSrc="/Landscape.png" alt="jos" />

/*
 <div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 order-2">
                        <div className=" flex items-center col-span-1  p-8 ">

                        </div>

                        <div className="flex items-center col-span-1  p-8 order-1">

                        </div>
</div>
                    
<div className="grid grid-cols-1 md:grid-cols-2 px-0 py-16 ">
            <div className="col-span-1 p-4">
              
            </div>

            <div className="col-span-1 p-4">

            </div>

</div>
*/
