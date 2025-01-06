import React from 'react'

const STitle = ({title}) => {
    return (
        <section>
            <div className="w-full text-start ">
                <h2 className="small-text text-2xl sm:text-3xl md:text-4xl font-medium py-1 md:py-2">{title}</h2>
            </div>
        </section>
    )

}

export default STitle