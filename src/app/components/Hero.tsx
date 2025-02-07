import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-[300px] flex flex-col justify-center overflow-hidden">

            <div className="bg-[#F0F2F3] rounded-bl-[48px] flex flex-col-reverse lg:flex-row items-center relative">

                <div className="py-10 md:py-16 lg:py-24 px-4 md:px-10 lg:pl-20 flex-1">
                    <h1 className="text-sm md:text-base text-gray-500 mb-4">Welcome to Chairy</h1>
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        Best Furniture <br />
                        Collection for your <br />
                        interior.
                    </h1>
                    <button className="mt-6 bg-[#029FAE] flex items-center justify-center px-6 py-3 md:px-8 md:py-4 gap-3 text-white rounded-lg hover:bg-[#028a92] transition duration-300">
                        <span className="text-sm md:text-base">Shop Now</span>
                        <Image src="/rightarrow.svg" alt="right arrow" width={16} height={9} />
                    </button>
                </div>

                <div className="flex justify-center lg:justify-end w-full lg:w-auto p-4 sm:p-8 md:p-12 lg:flex-grow">
                    <Image
                        src="/chair.svg"
                        alt="chair image"
                        width={434}
                        height={584}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="flex justify-between overflow-hidden gap-x-7 md:gap-x-0">
                <Image src="/zapier.svg" alt="" width={85} height={87} />
                <Image src="/pipedrive.svg" alt="" width={107} height={109} />
                <Image src="/cib.svg" alt="" width={135} height={139} />
                <Image src="/z.svg" alt="" width={63} height={65} />
                <Image src="/burn.svg" alt="" width={98} height={101} />
                <Image src="/panadoc.svg" alt="" width={113} height={115} />
                <Image src="/moz.svg" alt="" width={84} height={87} />
            </div>


            <div className=" flex flex-col justify-center item-center px-5 md:px-0 gap-y-6" >
                <h1 className='font-semibold text-4xl sm:text-center 2xl:text-start text-center'>Featured Products</h1>

                <div className=" flex justify-center gap-x-28 flex-wrap gap-y-6  ">


                    <div className="flex flex-col ">

                        <div className=" relative">
                            <span className=' absolute z-50 top-[20px] left-[20px] bg-[#01AD5A] rounded text-[13px] font-medium text-white py-[6px] px-[10px]'>New</span>
                            <Image src="/pic1.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart2.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <span className=' absolute z-50 top-[20px] left-[20px] bg-[#F5813F] rounded text-[13px] font-medium text-white py-[6px] px-[10px]'>Sales</span>
                            <Image src="/pic2.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'><a href="/signleproductpage">Library Stool Chair</a></h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                    <span className='font-normal text-[18px] line-through text-[#9A9CAA]'>$30</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <Image src="/pic3.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <Image src="/pic4.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-4xl font-semibold lg:text-start text-center flex flex-col gap-y-12 lg:gap-y-0 mt-16">
                <h1>Top Categories</h1>

                <div className='flex lg:justify-between flex-wrap justify-center items-center  gap-y-12 lg:gap-y-0'>

                    <div>

                        <div className="relative rounded-lg overflow-hidden" style={{ width: '424px', height: '424px' }}>
                            <img src="/top1.svg" alt="Wing Chair" className="w-full h-full object-cover" />

                            <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-black text-white p-5 rounded-b-lg">
                                <h1 className="text-[20px] font-semibold">Wing Chair</h1>
                                <h1 className="text-[14px]">3,584 Products</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-lg overflow-hidden" style={{ width: '424px', height: '424px' }}>
                        <img src="/top2.svg" alt="Wing Chair" className="w-full h-full object-cover" />

                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-black text-white p-5 rounded-b-lg">
                            <h1 className="text-[20px] font-semibold">Wing Chair</h1>
                            <h1 className="text-[14px]">3,584 Products</h1>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden" style={{ width: '424px', height: '424px' }}>
                        <img src="/top3.svg" alt="Wing Chair" className="w-full h-full object-cover" />

                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-70 bg-black text-white p-5 rounded-b-lg">
                            <h1 className="text-[20px] font-semibold">Wing Chair</h1>
                            <h1 className="text-[14px]">3,584 Products</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid grid-rows-2 grid-cols-4 mt-12 '>
                <img src="/pic3.svg" alt="" width={768} height={768} className=' col-span-2 row-span-4 ' />
                <img src="/pic4.svg" alt="" width={367} height={367} className=' ' />
                <img src="/pic1.svg" alt="" width={367} height={367} className=' ' />
                <img src="/pic5.svg" alt="" width={367} height={367} className=' ' />
                <img src="/pic4.svg" alt="" width={367} height={367} className=' ' />
            </div>
            <div className='text-[34px] uppercase text-center'>
                <h1>Explore new and popular styles</h1>
            </div>






            <div className=" flex flex-col justify-center item-center  md:px-0 gap-y-6 mt-16" >
                <h1 className='font-semibold text-4xl text-center'>Featured Products</h1>

                <div className=" flex justify-center gap-x-6 flex-wrap gap-y-6  ">


                    <div className="flex flex-col ">

                        <div className=" relative">
                            <span className=' absolute z-50 top-[20px] left-[20px] bg-[#01AD5A] rounded text-[13px] font-medium text-white py-[6px] px-[10px]'>New</span>
                            <Image src="/pic1.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart2.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                        <span className=' absolute z-50 top-[20px] left-[20px] bg-[#F5813F] rounded text-[13px] font-medium text-white py-[6px] px-[10px]'>Sales</span>
                        <Image src="/pic2.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                    <span className='font-normal text-[18px] line-through text-[#9A9CAA]'>$30</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <Image src="/pic3.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <Image src="/pic4.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <span className=' absolute z-50 top-[20px] left-[20px] bg-[#01AD5A] rounded text-[13px] font-medium text-white py-[6px] px-[10px]'>New</span>
                            <Image src="/pic6.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                        <span className=' absolute z-50 top-[20px] left-[20px] bg-[#F5813F] rounded text-[13px] font-medium text-white py-[6px] px-[10px]'>Sales</span>
                            <Image src="/pic5.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            
                            <Image src="/pic7.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">

                        <div className=" relative">
                            <Image src="/pic1.svg" alt="" width={312} height={312} />
                        </div>
                        <div className='flex flex-col gap-[10px] mt-2'>
                            <h1 className='text-[#007580] text-[16px]'>Library Stool Chair</h1>
                            <div className=" flex justify-between w-[312px] ">
                                <div className="flex gap-2 items-center">

                                    <span className='font-semibold text-[18px]'>$20</span>
                                </div>

                                <div className="">
                                    <Image src="/cart3.svg" alt="" width={44} height={44} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>



    );
}

export default Hero;