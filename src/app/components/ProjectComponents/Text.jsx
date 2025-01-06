
import React from 'react';

const Text = ( {text}) => {
    return (
        <section>
            <div
            className="w-full text-start "
             >

            
            <p className="small-text font-thin text-sm md:text-base lg:text-xl whitespace-break-spaces">
               {text}
            </p>
            </div>

        </section>
    )
}

export default Text