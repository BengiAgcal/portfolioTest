import React from 'react'
import Link from 'next/link';

const FooterContent = () => {
  return (
    <section className='  bg-zinc-800 px-12 py-0 lg:px-24'>
            <div className='grid grid-cols-3 py-4 '>
                <div className='col-span1'>
                    <ul className="flex flex-col items-start justify-start  py-4 ">
                        <li>
                            <Link href="/#about" className="desc-text text-left  text-zinc-300  font-light block py-0  pr-4 sm:text-xl hover:text-gray-600">About</Link>
                        </li>
                        <li>
                            <Link href="/#projects" className="desc-text  text-zinc-300  font-light block py-0 pr-4 sm:text-xl hover:text-gray-600">Works</Link>
                        </li>
                        <li>
                            <Link href="/#public" className="desc-text  text-zinc-300  font-light block py-0  pr-4 sm:text-xl hover:text-gray-600">Exhibitions & Publications</Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="desc-text  text-zinc-300  font-light py-0  pr-4 sm:text-xl hover:text-gray-600">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='col-span1'>
                    <ul className="flex flex-col py-4 ">
                        <li>
                            <Link href='https://www.instagram.com/bagcal.art/' 
                                target="_blank" 
                                rel="noopener noreferrer"  className="desc-text  text-zinc-300  font-light block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-600">Instagram</Link>
                        </li>
                        <li>
                            <Link href= 'https://www.linkedin.com/in/bengi-agcal/' 
                                target="_blank" 
                                rel="noopener noreferrer"  className="desc-text text-zinc-300  font-light block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-600">LinkedIn</Link>
                        </li>
                        <li>
                            <Link href="mailto:agcalbengi@gmail.com"
                                target="_blank" 
                                rel="noopener noreferrer"  className="desc-text text-zinc-300  font-light block py-0 pl-3 pr-4 sm:text-xl hover:text-gray-600">Email</Link>
                        </li>
                       
                    </ul>
                </div>

                
            </div>
            <h1  className="big-text3 font-light text-zinc-300 text-8xl md:text-9xl xl:text-[200px] text-Left py-8 "> Bengi Agcal</h1>
            <div className='grid grid-cols-2 p-4 '>
                <p className='desc-text text-white col-span-1 font-thin text-left'>Design & Development by Bengi (Benji) Agcal </p>
                <p className='desc-text text-white col-span-1 font-thin text-right'>All Rights Reserved © 2024</p>
            </div>
        </section>
  )
}

export default FooterContent