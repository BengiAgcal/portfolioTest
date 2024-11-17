import React from 'react'

const ProjectDetails = ({ tools, desc, year, duration }) => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-5 p-0'>
                <div className='col-span-1 md:col-span-3 p-4'>
                    <h2 className=' small-text font-thin text-base '>PROJECT OVERVIEW</h2>
                    <p className=' small-text font-normal  text-2xl md:text-3xl'>{desc} </p>

                </div>
                <div className='col-span-1 lg:col-span-2 p-4'>
                    <div className='grid grid-cols-2 justify-start items-start'>

                        <div className='col-span-1'>
                            <h2 className=' small-text font-thin text-base py-2'>TOOLS </h2>
                            <ul>
                                {tools.map((item, index) => (
                                    <li className=' small-text font-normal text-xl md:text-2xl p-0' key={index}>{item}</li>
                                ))}

                            </ul>

                        </div>

                        <div className='col-span-1 '>

                            <h2 className=' small-text font-thin text-base '>YEAR </h2>
                            <p className=' small-text font-normal  text-xl md:text-2xl'> {year}</p>

                            <div className='p-2' />
                            <h2 className=' small-text font-thin text-lg '>DURATION</h2>
                            <p className=' small-text font-normal  text-xl md:text-2xl'> {duration}</p>


                        </div>


                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProjectDetails