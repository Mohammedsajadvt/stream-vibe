import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { Button } from '../components/ui/button';
function IntroSection() {
    return (
        <div className='flex flex-col justify-center items-center  mt-[-35px]'>
            <h1 className='font-bold text-4xl text-white sm:px-6 items-center md:px-12 text-center'>The Best Streaming Experience</h1>
            <p className='text-[#999999]   pt-3 text-[13px]  md:pl-50 md:pr-50   text-center py-2 pr-2 pl-2   font-light'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <div className='pt-8'>
                <Button variant='default' className='font-normal items-center'>
                    < FaPlay /> Start Watching Now
                </Button>
            </div>
        </div>
    )
}

export default IntroSection
