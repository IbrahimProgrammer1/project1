import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

    <div className='xl:px-[300px] overflow-hidden'>
    <div className='px-4 md:px-12 lg:px-20 xl:px-32 py-10 flex flex-col md:flex-row md:justify-between gap-10'>
      
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <div className="flex items-center font-semibold gap-2">
          <Image src="/comforty.svg" alt="Comforty Logo" width={40} height={40} />
          <h1 className="text-lg md:text-xl font-bold">Comforty</h1>
        </div>
        <p className="text-sm md:text-base text-gray-600">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. 
          Cras egestas purus.
        </p>
        <div className="flex gap-3">
          <img src="/facekoob.svg" alt="Facebook" className="w-8 h-8" />
          <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
          <img src="/insta.svg" alt="Instagram" className="w-8 h-8" />
          <img src="/pintrest.svg" alt="Pinterest" className="w-8 h-8" />
          <img src="/yt.svg" alt="YouTube" className="w-8 h-8" />
        </div>
      </div>

      <div className="w-full md:w-1/5 flex flex-col gap-5">
        <h1 className='uppercase text-[#9A9CAA] text-sm md:text-base'>Category</h1>
        <ul className='text-sm md:text-base flex flex-col gap-3'>
          <li><a href="#" className="hover:text-[#007580]">Sofa</a></li>
          <li><a href="#" className="hover:text-[#007580]">Armchair</a></li>
          <li><a href="#" className="hover:text-[#007580]">Wing Chair</a></li>
          <li><a href="#" className="text-[#007580] underline">Desk Chair</a></li>
          <li><a href="#" className="hover:text-[#007580]">Wooden Chair</a></li>
          <li><a href="#" className="hover:text-[#007580]">Park Bench</a></li>
        </ul>
      </div>

      <div className="w-full md:w-1/5 flex flex-col gap-5">
        <h1 className='uppercase text-[#9A9CAA] text-sm md:text-base'>Support</h1>
        <ul className='text-sm md:text-base flex flex-col gap-3'>
          <li><a href="#" className="hover:text-[#007580]">Help & Support</a></li>
          <li><a href="#" className="hover:text-[#007580]">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-[#007580]">Privacy Policy</a></li>
          <li><a href="/faq" className="hover:text-[#007580]">FAQ</a></li>
        </ul>
      </div>

      <div className="w-full md:w-1/3 flex flex-col gap-5">
        <h1 className='uppercase text-[#9A9CAA] text-sm md:text-base'>Newsletter</h1>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input 
            type="text" 
            placeholder='Your email' 
            className='w-full sm:w-auto flex-1 border border-[#E1E3E5] rounded-lg p-3 text-sm md:text-base'
          />
          <button className='w-full sm:w-auto bg-[#029FAE] py-3 px-8 rounded-lg text-white text-sm md:text-base'>
            Subscribe
          </button>
        </div>
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam tincidunt erat enim.
        </p>
      </div>

      </div>

      <div className='flex items-center justify-between [#E1E3E5] border-t-[1px] border-black border-opacity-30 py-6 px-12'>
<div className=''>
  <span className='text-[#9A9CAA]'>@ 2021 - Blogy - Designed & Develop by <span className='text-[#272343]'>Zakirsoft</span></span>

</div> 

<div className='flex w-[227px] h-[27px] gap-1'>
  <img src="/mastercard.svg" alt="" />
  <img src="/paypal.svg" alt="" />
  <img src="/american.svg" alt="" />
  <img src="/visa.svg" alt="" />
</div>

</div>
    </div>
  )
}

export default Footer
