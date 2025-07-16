import React from 'react'
import DeviceCard from '../components/DeviceCard';
function StreamingExperience() {
    return (
        <div className='flex pt-20 md:pl-20 md:pr-20 pr-2 pl-2 justify-between gap-45'>
            <div className='flex flex-col'>
                <div>
                    <h1 className='text-white text-2xl font-bold'>We Provide you streaming experience across various devices.</h1>

                </div>
                <p className='text-[#999999]   pt-3 text-[13px] font-light'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                <DeviceCard />

            </div>
        </div>
    )
}

export default StreamingExperience
