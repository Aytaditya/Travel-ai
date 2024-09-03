
import './App.css'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className='text-red-500'>
        <h1 className='text-red-500 text-2xl pl-3'>hii</h1>
      </div>
      <Badge>hiiii</Badge>
      <Button variant={"destructive"}>Button</Button>
    </>
  )
}

export default App
