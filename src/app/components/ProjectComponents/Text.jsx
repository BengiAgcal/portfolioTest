
import React from 'react';

const Text = ( {text}) => {
    return (
        <section>
            <div
            className="w-full text-start "
             >

            
            <p className="small-text font-thin text-xl md:text-2xl">
               {text}
            </p>
            </div>

        </section>
    )
}

export default Text