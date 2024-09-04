
import { Button } from '../ui/button'
import logo from '/logo.svg'



const Header = () => {
 
  
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 '>
      <div className='flex items-center'>
      <img src={logo} alt="logo" className='w-[50px] cursor-pointer'  />
      <h5 className='ml-1 text-2xl font-extrabold cursor-pointer font-serif text-[#473ee1]'>Travel AI</h5>
      </div>
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
   
  )
}

export default Header
