import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex items-center w-full p-6 justify-between sm:flex-row flex-col">
                <div className="flex justify-between w-full sm:w-[150px] pb-2">
                <Link href={"/"}>
                    <Image width="120" height="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" alt="google icon"/>
                </Link>
                <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2 sm:hidden">Sign In</button>
                </div>
                <div className="flex-1">
                    <SearchBox/>
                </div>
                <div className="hidden md:inline-flex space-x-2 ">
                    <RiSettings3Line className="header-icon"/>
                    <TbGridDots className="header-icon"/>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2 hidden sm:flex">Sign In</button>
            </div>
            <SearchHeaderOptions />
        </header>
    )
}
