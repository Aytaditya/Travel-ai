
import { Button } from '../ui/button'
import logo from '/logo.svg'



const Header = () => {
 
  
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 '>
      <img src={logo} alt="logo" className='w-[50px] cursor-pointer'  />
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
   
  )
}

export default Header
