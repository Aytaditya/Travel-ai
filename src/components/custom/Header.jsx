/* eslint-disable no-unused-vars */

import { Button } from '../ui/button'
import logo from '/logo.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"


const Header = () => {
 
  
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 '>
      <div className='flex items-center'>
      <img src={logo} alt="logo" className='w-[50px] cursor-pointer'  />
      <h5 className='ml-1 text-2xl font-extrabold cursor-pointer font-serif text-[#473ee1]'>Travel AI</h5>
      </div>
      <div>
      <SignedOut>
        <SignInButton className="bg-black text-white px-3 py-1 rounded-md font-semibold font-sans hover:bg-gray-900"/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
   
  )
}

export default Header
