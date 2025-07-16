import React from 'react'
import phone from '../assets/phone.png'
import tab from '../assets/tab.png'
import tv from '../assets/tv.png';
import laptop from '../assets/laptop.png';
import console from '../assets/console.png';
import vr from '../assets/vr.png';
const deviceData = [
    {
        image: phone,
        deviceName: "Smartphones",
        description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        image: tab,
        deviceName: "Tablet",
        description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        image: tv,
        deviceName: "Smart TV",
        description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    },
    {
        image: laptop,
        deviceName: "Laptops",
        description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    }, {
        image: console,
        deviceName: "Gaming Consoles",
        description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    }, {
        image: vr,
        deviceName: "VR Headsets",
        description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
    }
];

function DeviceCard() {
    return (
        <div className='grid md:grid-cols-3   pt-10 gap-5'>
            {
                deviceData.map((data) => (
                    <div className='bg-gradient-to-tr sm:mt-2 cursor-pointer transition-transform hover:-translate-y-1 ease-in-out delay-150 duration-300  from-[#0F0F0F] min-w-[350px] to-[#E50000]/15  via-[#1A1A1A] px-8 py-8  rounded-lg'>
                        <div className='flex gap-3 items-center'>
                            <div className='border  w-[50px] h-[50px]  bg-[#141414]  border-[#1F1F1F] rounded-md flex justify-center items-center'>
                                <img src={data.image} alt={data.deviceName} className='w-[20px]' />
                            </div>
                            <h2 className='font-semibold text-white text-[20px]'>{data.deviceName}</h2>

                        </div>
                        <h2 className='pt-5 text-[#999999] text-[15px]'>{data.description}</h2>
                    </div>

                ))
            }

        </div>
    )
}

export default DeviceCard
