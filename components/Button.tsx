'use client';
import Image from "next/image"

const Button = () => {
  return (
    <button id="explore-btn" className="mt-5 mx-auto">
    <a href="#events" className="text-white no-underline hover:underline" >
    Explore Events
    <Image src='/icons/arrow-down.svg' width={24} height={24} alt="down" />
    </a>
    </button>
  )
}

export default Button