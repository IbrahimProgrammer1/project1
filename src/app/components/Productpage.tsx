import React from 'react';
import Image from 'next/image';

const Productpage = () => {
    return (
        <div className='px-4 sm:px-10 md:px-20 lg:px-40 xl:px-[300px] my-16'>

            <div className="flex flex-col justify-center items-center gap-y-6 mt-16">
                <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl text-center'>Featured Products</h1>

                <div className="flex flex-wrap justify-center ">

                    
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
