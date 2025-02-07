import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[300px]'>
            <div className='flex flex-col md:justify-center md:items-center md:gap-4 xl:flex-row lg:justify-between'>
                <div className=''>
                    <div className="bg-[#007580] w-full md:w-[572px] p-6 md:p-[64px] space-y-4 text-center md:text-left">
                        <h1 className='font-inter text-white font-bold text-2xl md:text-[32px]'>About Us - Comforty</h1>
                        <p className='font-inter text-white text-base md:text-[18px]'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.</p>

                        <div className='flex justify-center md:justify-start'>
                            <button className='bg-[#F9F9F9] bg-opacity-15 text-white mt-4 py-3 px-6 md:py-6 md:px-8'>View Collection</button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[500px]">
                    <Image
                        src="/pic0.svg"
                        alt="Comforty Chair"
                        width={572}
                        height={478}
                        className='w-full h-auto'
                    />
                </div>
            </div>


            {/* Differentiators Section */}
            <div className="mt-12">
                <h1 className='font-inter text-[#272343] font-semibold text-2xl md:text-[32px] text-center'>What makes our Brand Different</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
                    {[
                        { icon: "/delivery.svg", title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard" },
                        { icon: "/verify.svg", title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftmanship" },
                        { icon: "/delivery.svg", title: "Unbeatable prices", description: "For our materials and quality you won't find better prices anywhere" },
                        { icon: "/packaging.svg", title: "Recycled packaging", description: "We use 100% recycled to ensure our footprint is more manageable" }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#F9F9F9] p-8 flex flex-col items-start space-y-4"
                        >
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={24}
                                height={24}
                            />
                            <h2 className='text-lg md:text-[20px] text-[#007580] font-inter'>{feature.title}</h2>
                            <p className='text-sm md:text-[16px] text-[#007580] font-inter'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h1 className='text-[#272343] text-2xl md:text-[32px] font-inter font-semibold mb-8'>Our Popular Products</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {[
                        { image: "/sofa.svg", name: "The Poplar suede sofa", price: "$99.00" },
                        { image: "/dandy.svg", name: "The Dandy chair", price: "$99.00" },
                        { image: "/dandy2.svg", name: "The Dandy chair", price: "$99.00" }
                    ].map((product, index) => (
                        <div key={index} className="w-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={630}
                                height={375}
                                className='w-full h-auto object-cover'
                            />
                            <h2 className='text-lg md:text-[20px] font-inter mt-4'>{product.name}</h2>
                            <p className='text-base md:text-[18px] font-inter'>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default About