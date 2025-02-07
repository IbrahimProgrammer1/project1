import React from 'react';
import Image from 'next/image';

const Productpage = () => {
    return (
        <div className='px-4 sm:px-10 md:px-20 lg:px-40 xl:px-[300px] my-16'>

            <div className="flex flex-col justify-center items-center gap-y-6 mt-16">
                <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl text-center'>Featured Products</h1>

                <div className="flex flex-wrap justify-center ">

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <span className='absolute z-50 top-3 left-3 bg-[#01AD5A] rounded text-xs font-medium text-white py-1 px-2'>New</span>
                            <Image src="/pic1.svg" alt="Product 1" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart2.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <span className='absolute z-50 top-3 left-3 bg-[#F5813F] rounded text-xs font-medium text-white py-1 px-2'>Sales</span>
                            <Image src="/pic2.svg" alt="Product 2" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <span className='font-semibold text-lg'>$20</span>
                                    <span className='line-through text-gray-400'>$30</span>
                                </div>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <Image src="/pic3.svg" alt="Product 3" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <Image src="/pic4.svg" alt="Product 4" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <span className='absolute z-50 top-3 left-3 bg-[#01AD5A] rounded text-xs font-medium text-white py-1 px-2'>New</span>
                            <Image src="/top2.svg" alt="Product 5" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart2.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <span className='absolute z-50 top-3 left-3 bg-[#F5813F] rounded text-xs font-medium text-white py-1 px-2'>Sales</span>

                            <Image src="/pic8.svg" alt="Product 6" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <Image src="/pic5.svg" alt="Product 7" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart2.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <Image src="/pic6.svg" alt="Product 8" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <span className='absolute z-50 top-3 left-3 bg-[#01AD5A] rounded text-xs font-medium text-white py-1 px-2'>New</span>

                            <Image src="/pic7.svg" alt="Product 9" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart2.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <span className='absolute z-50 top-3 left-3 bg-[#F5813F] rounded text-xs font-medium text-white py-1 px-2'>Sales</span>

                            <Image src="/pic2.svg" alt="Product 10" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <Image src="/pic4.svg" alt="Product 11" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart2.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/4 p-2">
                        <div className="relative">
                            <Image src="/pic5.svg" alt="Product 12" width={312} height={312} className="w-full h-auto" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                            <h1 className='text-[#007580] text-sm sm:text-md'>Library Stool Chair</h1>
                            <div className="flex justify-between">
                                <span className='font-semibold text-lg'>$20</span>
                                <Image src="/cart3.svg" alt="Add to Cart" width={30} height={30} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-[#1E28320D] bg-opacity-5 flex flex-col justify-center items-center gap-y-16 py-[100px]'>
    <h1 className='capitalize font-medium text-4xl sm:text-5xl md:text-6xl font-roboto text-center'>
        Or subscribe to the newsletter
    </h1>

    {/* Input and Submit Button */}
    <div className='flex flex-col sm:flex-row justify-center items-center gap-x-4 w-full max-w-[800px]'>
        <input
            type="text"
            placeholder='Enter Address...'
            className='border-b-2 border-black bg-transparent w-full sm:w-[643px] p-2 font-opensans'
        />
        <span className='border-b-2 border-black p-2 font-opensans mt-4 sm:mt-0'>
            SUBMIT
        </span>
    </div>

    {/* Subtitle */}
    <h2 className='capitalize font-medium text-4xl sm:text-5xl md:text-6xl font-roboto text-center'>
        Follow products and discounts on Instagram
    </h2>

    {/* Image Gallery */}
    <div className='flex flex-wrap justify-center gap-6 sm:gap-4 overflow-hidden'>
        <Image src="/top2.svg" alt="Product 5" width={186} height={186} className='rounded-[10px]' />
        <Image src="/pic6.svg" alt="Product 5" width={186} height={186} className='rounded-[10px]' />
        <Image src="/pic2.svg" alt="Product 5" width={186} height={186} className='rounded-[10px]' />
        <Image src="/pic1.svg" alt="Product 5" width={186} height={186} className='rounded-[10px]' />
        <Image src="/pic3.svg" alt="Product 5" width={186} height={186} className='rounded-[10px]' />
        <Image src="/pic8.svg" alt="Product 5" width={186} height={186} className='rounded-[10px]' />
    </div>
</div>

        </div>
    );
}

export default Productpage;
