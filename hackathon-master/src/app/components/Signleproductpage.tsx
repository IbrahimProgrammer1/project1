import React from 'react'
import Image from 'next/image'

const Signleproductpage = () => {
    return (
        <div className='px-6 md:px-12 lg:px-24 xl:px-[300px]'>
            <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-24">
                <div className="w-full lg:w-1/2">
                    <Image src="/pic2.svg" alt="Library Stool Chair" width={675} height={607} className="w-full object-contain" />
                </div>

                <div className='flex flex-col gap-y-12 w-full lg:w-1/2'>
                    <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl text-[#272343]">
                        Library Stool <br /> Chair
                    </h1>

                    <div>
                        <button className='bg-[#029FAE] rounded-[100px] p-4 text-white font-inter font-semibold text-xl sm:text-2xl'>
                            $200.00 USD
                        </button>
                    </div>

                    <div className="border-b-[1px] border-[#D9D9D9]"></div>

                    <div className="flex flex-col gap-y-12">
                        <p className='text-lg sm:text-xl lg:text-[22px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam tincidunt erat enim. Lorem ipsum dolor <br /> sit amet, consectetur adipiscing
                        </p>
                        <div>
                            <button className='bg-[#029FAE] px-6 py-[14px] flex text-white gap-x-[9px] rounded-lg text-lg sm:text-xl'>
                                <Image src="/wcart.svg" alt="Add to Cart" width={22.36} height={16.3} />
                                <span>Add To Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <div className="flex flex-col justify-center items-center gap-y-6">
                    <div className="flex justify-between items-center w-full">
                        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center uppercase">
                            Featured Products
                        </h1>
                        <h1 className="font-inter font-bold underline cursor-pointer">
                            View all
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center">

                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-4">
                            <div className="relative">
                                <Image src="/pic7.svg" alt="Product 12" width={312} height={312} className="w-full h-auto" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#272343] text-[16px] text-sm sm:text-md">Library Stool Chair</span>

                                <span className="font-bold text-[14px] text-lg">$99</span>
                            </div>
                        </div>

                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-4">
                            <div className="relative">
                                <Image src="/pic1.svg" alt="Product 13" width={312} height={312} className="w-full h-auto" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#272343] text-[16px] text-sm sm:text-md">Library Stool Chair</span>

                                <span className="font-bold text-[14px] text-lg">$99</span>
                            </div>
                        </div>

                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-4">
                            <div className="relative">
                                <Image src="/pic8.svg" alt="Product 13" width={312} height={312} className="w-full h-auto" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#272343] text-[16px] text-sm sm:text-md">Library Stool Chair</span>

                                <span className="font-bold text-[14px] text-lg">$99</span>
                            </div>
                        </div>

                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-4">
                            <div className="relative">
                                <Image src="/pic3.svg" alt="Product 13" width={312} height={312} className="w-full h-auto" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-[#272343] text-[16px] text-sm sm:text-md">Library Stool Chair</span>

                                <span className="font-bold text-[14px] text-lg">$99</span>
                            </div>
                        </div>

                        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-4">
                            <div className="relative">
                                <Image src="/pic6.svg" alt="Product 13" width={312} height={312} className="w-full h-auto" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
      <span className="text-[#272343] text-[16px] text-sm sm:text-md">Library Stool Chair</span>

        <span className="font-bold text-[14px] text-lg">$99</span>
                        </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signleproductpage
