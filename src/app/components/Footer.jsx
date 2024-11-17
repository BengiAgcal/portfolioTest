import React from 'react'
import FooterContent from './FooterContent'

const Footer = () => {
    return (
        <section className='relative h-[550px] bg-zinc-800 '
        style={{clipPath:"polygon(0% 0, 100% 0%, 100% 100% , 0 100%)", overflow: 'hidden'}}>
            <div className='relative h-[calc(100vh+550px)] -top-[100vh]'>
                <div className='sticky top-[calc(100vh-550px)] h-[550px]'>
                <FooterContent/>
                </div>
            
            </div>
            
        </section>
    )
}

export default Footer