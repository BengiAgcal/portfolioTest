import React from 'react'

const ProjectDetails = ({ tools, desc, year, duration }) => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-5 '>
                <div className='col-span-1 md:col-span-3 pt-4 '>
                    <h2 className=' small-text font-thin text-xs md:text-base py-2'>PROJECT OVERVIEW</h2>
                    <p className=' small-text font-normal text-sm sm:text-base md:text-2xl'>{desc} </p>

                </div>
                <div className='col-span-1 lg:col-span-2 pt-4 '>
                    <div className='grid grid-cols-2 justify-start items-start'>

                        <div className='col-span-1 px-0 lg:px-4'>
                            <h2 className=' small-text font-thin text-xs md:text-base py-2'>TOOLS </h2>
                            <ul>
                                {tools.map((item, index) => (
                                    <li className=' small-text font-normal text-sm sm:text-base md:text-xl p-0' key={index}>{item}</li>
                                ))}

                            </ul>

                        </div>

                        <div className='col-span-1 '>

                            <h2 className=' small-text font-thin text-xs md:text-base py-2'>YEAR </h2>
                            <p className=' small-text font-normal text-sm sm:text-base md:text-xl p-0'> {year}</p>

                            <div className='p-2' />
                            <h2 className=' small-text font-thin text-xs md:text-base py-2'>DURATION</h2>
                            <p className=' small-text font-normal text-sm sm:text-base md:text-xl p-0'> {duration}</p>


                        </div>


                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProjectDetails