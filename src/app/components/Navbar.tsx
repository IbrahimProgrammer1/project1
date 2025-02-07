"use client"
import React, { useState } from 'react';
import Image from 'next/image';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='xl:px-[300px]'>
            
            {/* Shipping Info and Help Section */}
            <div className="bg-[#272343] p-2 text-white flex justify-between items-center px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-32">
                <div className="flex gap-x-2">
                    <Image src="/tick.svg" alt="tick icon" width={10} height={7} />
                    <h1 className="text-sm">Free shipping on all orders over $50</h1>
                </div>
                <div className="flex gap-x-6 text-sm">
                    <div className="flex gap-x-2">
                        <span>Eng</span>
                        <Image src="/downarrow.svg" alt="down arrow" width={7} height={4} />
                    </div>
                    <span>Faqs</span>
                    <div className="flex gap-x-2">
                        <img src="/info.svg" alt="info icon" className="w-4 h-4" />
                        <span>Need Help</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar Section */}
            <div className="bg-[#F0F2F3] px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-32 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center text-2xl">
                    <Image src="/comforty.svg" alt="logo" width={40} height={40} />
                    <span className="font-medium ml-2">Comforty</span>
                </div>

                {/* Cart & Notifications (Visible on Medium and larger screens) */}
                <div className="hidden md:flex bg-white items-center gap-3 rounded-lg py-2 px-3">
                    <a href="/cart"><Image src="/cart.svg" alt="cart icon" height={22} width={22} /></a>
                    <span className="text-sm">Cart</span>
                    <Image src="/notification.svg" alt="notification icon" height={20} width={20} />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden focus:outline-none" 
                    onClick={toggleMenu}
                >
                    <Image src="/menu.svg" alt="menu icon" width={28} height={28} />
                </button>
            </div>

            {/* Navbar Menu (Visible on Medium screens and up, or when mobile menu is open) */}
            <div 
                className={`bg-white w-full md:flex justify-between items-center px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-32 py-4 border-b-[1px] border-black border-opacity-30 mb-5 
                ${menuOpen ? 'block' : 'hidden'} md:block`}
            >
                {/* Menu Items */}
                <ul className="flex flex-col md:flex-row md:gap-8 gap-4 text-sm font-medium">
                    <li><a href="/" className="hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500">Shop</a></li>
                    <li><a href="/product" className="hover:text-blue-500">Product</a></li>
                    <li><a href="/login" className="hover:text-blue-500">Login</a></li>
                    <li><a href="/about" className="hover:text-blue-500">About</a></li>
                    <li><a href="/cart" className="hover:text-blue-500">Cart</a></li>
                </ul>

                {/* Contact Information */}
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <span className="text-gray-500 text-sm"><a href="/getin">Contact</a></span>
                    <span className="text-sm font-medium">(808) 555-0111</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
