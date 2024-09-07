

import { Button } from '../ui/button'
import logo from '/logo.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"


const Header = () => {
 
 
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 '>
     
      <a href="/" className='flex items-center'>
      <img src={logo} alt="logo" className='w-[50px] cursor-pointer'  />
      <h5 className='ml-1 text-2xl font-extrabold cursor-pointer font-serif text-[#473ee1]'>Travel AI</h5>
      </a>
    
      <div>
      <SignedOut>
        <div className='flex items-center gap-3'>
        <SignInButton className="bg-black text-white px-3 py-1 rounded-md font-semibold font-sans hover:bg-gray-900"/>
        </div>
      </SignedOut>
      <SignedIn>
        <div className='flex items-center gap-3'>
        <a href="/create-trip">
          <Button size={"sm"} >Create Trips</Button>
          </a>
          <a href="/my-trips">
          <Button size={"sm"} >My Trips</Button>
          </a>
        <UserButton />
        </div>
      </SignedIn>
      </div>
    </div>
   
  )
}

export default Header
