import React from 'react'
import Image from 'next/image'

const Cartpage = () => {
    return (
        <div className='px-6 py-12 sm:px-8 md:px-12 lg:px-24 xl:px-[300px]'>
            <h1 className='text-2xl sm:text-xl font-semibold font-inter mb-10 text-center sm:text-left'>Bag</h1>

            <div className='flex flex-col gap-y-10'>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 items-center gap-6 border-b pb-10 justify-center sm:justify-start">
                    
                    <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                        <Image 
                            src="/pic3.svg" 
                            alt="Product Image" 
                            width={180} 
                            height={180} 
                            className="w-40 sm:w-32 md:w-48 lg:w-60 h-auto mx-auto sm:mx-0" 
                        />
                    </div>

                    <div className="flex flex-col items-center sm:items-start sm:col-span-2 gap-y-4 text-center sm:text-left">
                        <h1 className='font-inter text-lg sm:text-base md:text-lg'>Library Stool Chair</h1>
                        <h1 className='text-md sm:text-sm text-[#757575]'>Ashen Slate/Cobalt Bliss</h1>

                        <div className="flex flex-col gap-y-4 sm:gap-y-2">
                            <div className="flex flex-row justify-between w-full gap-x-6">
                                <div className='flex items-center text-[#757575] text-lg sm:text-sm'>
                                    <h1 className='font-semibold mr-2'>Size:</h1>
                                    <h1>L</h1>
                                </div>
                                <div className='flex items-center text-[#757575] text-lg sm:text-sm'>
                                    <h1 className='font-semibold mr-2'>Quantity:</h1>
                                    <h1>1</h1>
                                </div>
                            </div>

                            <div className="flex justify-center items-center sm:justify-start space-x-6">
                                <img src="/heart.svg" alt="Heart Icon" className="w-8 h-8 sm:w-6 sm:h-6" />
                                <img src="/bin.svg" alt="Bin Icon" className="w-8 h-8 sm:w-6 sm:h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end justify-between h-full gap-4">
                        <h1 className='font-inter text-lg sm:text-base md:text-lg'>MRP: $99</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 items-center gap-6 border-b pb-10 justify-center sm:justify-start">
                    
                    <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                        <Image 
                            src="/pic6.svg" 
                            alt="Product Image" 
                            width={180} 
                            height={180} 
                            className="w-40 sm:w-32 md:w-48 lg:w-60 h-auto mx-auto sm:mx-0" 
                        />
                    </div>

                    <div className="flex flex-col items-center sm:items-start sm:col-span-2 gap-y-4 text-center sm:text-left">
                        <h1 className='font-inter text-lg sm:text-base md:text-lg'>Library Stool Chair</h1>
                        <h1 className='text-md sm:text-sm text-[#757575]'>Ashen Slate/Cobalt Bliss</h1>

                        <div className="flex flex-col gap-y-4 sm:gap-y-2">
                            <div className="flex flex-row justify-between w-full gap-x-6">
                                <div className='flex items-center text-[#757575] text-lg sm:text-sm'>
                                    <h1 className='font-semibold mr-2'>Size:</h1>
                                    <h1>L</h1>
                                </div>
                                <div className='flex items-center text-[#757575] text-lg sm:text-sm'>
                                    <h1 className='font-semibold mr-2'>Quantity:</h1>
                                    <h1>1</h1>
                                </div>
                            </div>

                            <div className="flex justify-center items-center sm:justify-start space-x-6">
                                <img src="/heart.svg" alt="Heart Icon" className="w-8 h-8 sm:w-6 sm:h-6" />
                                <img src="/bin.svg" alt="Bin Icon" className="w-8 h-8 sm:w-6 sm:h-6" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end justify-between h-full gap-4">
                        <h1 className='font-inter text-lg sm:text-base md:text-lg'>MRP: $99</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartpage
