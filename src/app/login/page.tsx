// src/app/login/page.tsx
'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Optional custom button component
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signIn("google", { redirect: false });
      if (result?.error) {
        alert("Login failed. Please try again.");
      } else {
        router.push("/");  // Redirect to home page after successful login
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex-row justify-between items-center px-4 md:px-10 lg:px-20 xl:px-[18.6rem] my-4">
      <div className="min-h-screen flex">
        {/* Left Side: Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center justify-center">
            <img src="/google.svg" alt="" />
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <Button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition "
            >
              <img src="/google.svg" alt="" className="h-5 w-5" />
              {loading ? 'Logging in...' : 'Sign in with Google'}
            </Button>
            <Link href={'/'} className="my-7">
            <Button
            variant={'ghost'}>
              Back To Home
              </Button></Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:block relative w-1/2">
          <Image
            src="/dandy.svg"      // Ensure this image exists in your public folder
            alt="Login Illustration"
            fill                       // Fills the parent container
            className="object-cover"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
