import React from 'react'
import Image from 'next/image'

const Getin = () => {
    return (
        <div className='px-6 py-16 sm:px-8 md:px-12 lg:px-24 xl:px-[300px]'>
            {/* Title Section */}

            <div className='lg:flex lg:justify-center lg:items-center lg:flex-col'>

            <h1 className='font-semibold font-poppins text-3xl sm:text-4xl text-center mb-6'>Get In Touch With Us</h1>
            <p className='font-poppins text-base sm:text-lg text-center leading-7 mb-8 lg:w-[45rem] capitalize text-[#9F9F9F] '>
                For more information about our product & services, please feel free to drop us an email. 
                Our staff will always be there to help you out. Do not hesitate!
            </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:px-20'>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-3">
                        <img src="/location.svg" alt="Location Icon" className="w-8 h-8" />
                        <div className="flex flex-col">
                            <h1 className='font-medium font-poppins text-xl sm:text-2xl'>Address</h1>
                            <p className='text-sm sm:text-base font-medium leading-6'>
                                236 5th SE Avenue, New <br /> York NY10000, United <br /> States
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <img src="/phone.svg" alt="Phone Icon" className="w-8 h-8" />
                        <div className="flex flex-col">
                            <h1 className='font-medium font-poppins text-xl sm:text-2xl'>Phone</h1>
                            <p className='text-sm sm:text-base font-medium leading-6'>
                                Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <img src="/clock.svg" alt="Clock Icon" className="w-8 h-8" />
                        <div className="flex flex-col">
                            <h1 className='font-medium font-poppins text-xl sm:text-2xl'>Working Time</h1>
                            <p className='text-sm sm:text-base font-medium leading-6'>
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="space-y-6">
                        <div>
                            <h1 className='font-poppins font-medium text-base sm:text-lg'>Your Name</h1>
                            <input 
                                type="text" 
                                placeholder='Abc' 
                                className='border border-[#9F9F9F] rounded-lg w-full px-4 py-3' 
                            />
                        </div>

                        <div>
                            <h1 className='font-poppins font-medium text-base sm:text-lg'>Email Address</h1>
                            <input 
                                type="email" 
                                placeholder='Abc@def.com' 
                                className='border border-[#9F9F9F] rounded-lg w-full px-4 py-3' 
                            />
                        </div>

                        <div>
                            <h1 className='font-poppins font-medium text-base sm:text-lg'>Subject</h1>
                            <input 
                                type="text" 
                                placeholder='This is an optional' 
                                className='border border-[#9F9F9F] rounded-lg w-full px-4 py-3' 
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <h1 className='font-poppins font-medium text-base sm:text-lg'>Message</h1>
                        <textarea 
                            placeholder='Hi! I’d like to ask about...' 
                            className='border border-[#9F9F9F] rounded-lg w-full px-4 py-6 h-32 resize-none' 
                        />
                    </div>

                    <button className='font-poppins bg-[#029FAE] border border-[#B88E2F] rounded-md w-full py-3 mt-6 text-white'>
                        Submit
                    </button>
                </div>
            </div>

            <div className="bg-[#F4F4F4] py-16 px-6 sm:px-12 md:px-24 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                
                <div className="flex items-center">
                    <Image src="/award.svg" alt="Award Icon" className="mr-4"  height={60} width={60}/>
                    <div>
                        <h1 className='text-lg sm:text-xl font-semibold'>High Quality</h1>
                        <p className='text-sm sm:text-base font-medium text-[#898989]'>Crafted from top materials</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <Image src="/warranty.svg" alt="Warranty Icon" className="mr-4"  height={60} width={60}/>
                    <div>
                        <h1 className='text-lg sm:text-xl font-semibold'>Warranty Protection</h1>
                        <p className='text-sm sm:text-base font-medium text-[#898989]'>Over 2 years</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <Image src="/service.svg" alt="Service Icon" className="mr-4" height={60} width={60} />
                    <div>
                        <h1 className='text-lg sm:text-xl font-semibold'>24 / 7 Support</h1>
                        <p className='text-sm sm:text-base font-medium text-[#898989]'>Dedicated support</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Getin
