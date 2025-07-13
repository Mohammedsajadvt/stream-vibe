import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { Button } from '../components/ui/button';
function IntroSection() {
    return (
        <div className='flex flex-col justify-center items-center  mt-[-35px]'>
            <h1 className='font-bold text-4xl text-white sm:px-6 items-center md:px-12 text-center'>The Best Streaming Experience</h1>
            <p className='text-[#999999] text-sm sm:text-base pt-3 text-center   max-w-xl  font-light'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</p>
            <div className='pt-8'>
                <Button variant='default' className='font-normal items-center'>
                    < FaPlay /> Start Watching Now
                </Button>
            </div>
        </div>
    )
}

export default IntroSection
