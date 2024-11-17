
import React from 'react';

const Title = ({ title }) => {
    return (
        <section>
            <div className="w-full text-start ">
                <h2 className="big-text text-5xl md:text-7xl font-bold py-4">{title}</h2>
            </div>

        </section>
    )
  
}

export default Title