import React from 'react'
import Public from './Public'

const Publics = () => {
    return (
        <section>
            <h2 id="public" className="big-text text-5xl md:text-7xl font-bold pt-24 pb-12 text-center">Exhibitions & Publications</h2>
            <div className="container px-0 py-2">

                <Public
                    imageSrc="/PBL/Thesis.webp"
                    alt="a Tiger"
                    title="Bonding with the screen : forming connections through digital landscapes"
                    desc="MFA Thesis - 2024"
                    link="https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0444991?o=0"
                />

                <Public
                    imageSrc="/BVR/swim.jpg"
                    alt="A beaver"
                    title="Designing a Serious Game Utilizing Beaver Behavior for Water Responsibility"
                    desc="International Symposium on Electronic Art (ISEA) Conference 2024, Full Paper, Brisbane Australia, June 21-29, 2024 "
                    link=""
                />

                <Public
                    imageSrc="/PBL/deer.webp"
                    alt="a Deer"
                    title=" The 8th Continent - A Participatory Interactive Art and Gaming Experience for Reclaiming Public Screen"
                    desc="International Symposium on Electronic Art (ISEA) Conference 2024, Short Paper, Brisbane Australia, June 21-29, 2024"
                    link=""
                />

                 <Public
                    imageSrc="/PBL/BB.webp"
                    alt="a Tiger"
                    title="BAI BAI - Arts Council of the Central Okanagan"
                    desc="ARTSCO Community Gallery Exhibtion June 7th - July 31st, 2024 "
                    link="https://www.artsco.ca/baibai"
                />
                 <Public
                    imageSrc="/PBL/ice.webp"
                    alt="a Tiger"
                    title="BAI BAI - FINA Gallery University of British Columbia"
                    desc="MFA Thesis Exhibition March 18th - March 23rd, 2024"
                    link="https://blogs.ubc.ca/fccsartwork/2024/03/25/bai-bai-bengi-agcal/"
                />
                 <Public
                    imageSrc="/PBL/EC.webp"
                    alt="a Deer"
                    title="The 8th Continent: Echoing the Unheard Sounds of Pollution, a Participatory Immersive Art and Gaming Experience for Public Spaces"
                    desc="GoodIT '23: ACM International Conference on Information Technology for Social Good, Full Paper, Lisbon Portugal, September 6 - 8, 2023"
                    link="https://dl.acm.org/doi/10.1145/3582515.3609571"
                />
                <Public
                    imageSrc="/PBL/Land.webp"
                    alt="A Person viewing projected artwork"
                    title="Land Enough"
                    desc="SIGGRAPH Asia 2022 Art Gallery Daegu Republic of Korea December 6 - 9, 2022"
                    link="https://dl.acm.org/doi/10.1145/3550470.3558453"
                />
                 


            </div>

        </section>
    )
}

export default Publics

/*
<Public
                    imageSrc="/StarDiv.png"
                    alt="xx"
                    title="International Symposium on Electronic Art (ISEA) Conference PublicationTitle"
                    desc="International Symposium on Electronic Art (ISEA) Conference PublicationTitle"
                    link=""
                />
*/