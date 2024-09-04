

import { Input } from '../../components/ui/input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { SelectBudgetOptions, SelectTravelList } from '@/constants/Options'
import { Button } from '@/components/ui/button'

const CreateTrip = () => {
  const [currentInput, setCurrentInput] = useState('')
  const [predictions, setPredictions] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState('') // State to hold the final selected destination

  // State for form inputs
  const [inputDays, setInputDays] = useState('')
  const [inputBudget, setInputBudget] = useState('')
  const [inputPeople, setInputPeople] = useState('')

  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: '',
    people: ''
  })

  const handleSubmit = () => {
    setFormData({
      destination: selectedDestination,
      days: inputDays,
      budget: inputBudget,
      people: inputPeople
    })
  }

  // for printing value if formdata
  useEffect(() => {
    if (formData.destination || formData.days || formData.budget || formData.people) {
      console.log('Form Data:', formData)
    }
  }, [formData])

  useEffect(() => {
    if (currentInput.length > 0) { 
      const getDatas = async () => {
        const options = {
          method: 'GET',
          url: 'https://google-place-autocomplete-and-place-info.p.rapidapi.com/maps/api/place/autocomplete/json',
          params: { input: currentInput },
          headers: {
            'x-rapidapi-key': 'fbbb80289cmsh1c86d4e02268e44p161fdfjsn3dbdf624ba97',
            'x-rapidapi-host': 'google-place-autocomplete-and-place-info.p.rapidapi.com'
          }
        };
        try {
          const response = await axios.request(options);
          setPredictions(response.data.predictions);
          //console.log(response.data.predictions);
          setIsDropdownOpen(true); // Open the dropdown
        } catch (error) {
          console.error(error);
        }
      }
      getDatas();
    } else {
      setPredictions([]);
      setIsDropdownOpen(false); // Close the dropdown
    }
  }, [currentInput])

  const handleSelectPrediction = (description) => {
    setCurrentInput(description);
    setSelectedDestination(description); // Update the selected destination state
    setPredictions([]);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    if (selectedDestination) {
      console.log('Selected Destination:', selectedDestination);
    }
  }, [selectedDestination]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences 🏖️🌴</h2>
      <p className="mt-3 text-gray-500 text-md">Provide us with basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

      {/* Form */}
      <div>
        <div className="mt-20">
          <h2 className="text-xl my-3 font-semibold">What is your destination of choice?</h2>
          <Input 
            type="text" 
            className="w-full"
            placeholder="Enter your destination" 
            value={currentInput} 
            onChange={(e) => {
              setCurrentInput(e.target.value);
              if (!isDropdownOpen) {
                setIsDropdownOpen(true); // Reopen the dropdown if the user starts typing again
              }
            }} 
          />
          
          {/* Dropdown for predictions */}
          {isDropdownOpen && predictions.length > 0 && (
            <ul className="border border-gray-300 mt-2 rounded-md shadow-lg max-h-60 overflow-auto">
              {predictions.map((prediction, index) => (
                <li 
                  key={index} 
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectPrediction(prediction.description)} // Handle click
                >
                  {prediction.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Number of days input */}
      <div>
        <h2 className="text-xl my-3 font-md mt-8 font-semibold">How many days are you planning for your trip?</h2>
        <Input type="number" placeholder="Enter number of days" className="full" value={inputDays} onChange={(e) => setInputDays(e.target.value)} />
      </div>

      {/* Budget input */}
      <div>
        <h2 className="text-xl my-3 font-md mt-8 font-semibold">Choose your budget</h2>
        <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer'>
          {SelectBudgetOptions.map((option) => (
            <div key={option.id}  
            className={`p-4 border rounded-lg hover:shadow-2xl ${inputBudget==option.title && 'shadow-lg border-[2px]'}` }
            onClick={()=>setInputBudget(option.title)}>
              <h2 className='text-3xl'>{option.icon}</h2>
              <h2 className='font-bold text-lg'>{option.title}</h2>
              <h2 className='text-sm text-gray-800'>{option.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Number of people input */}
      <div>
        <h2 className="text-xl my-3 font-md mt-8 font-semibold">How many people are traveling?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer mb-5'>
          {SelectTravelList.map((option) => (
            <div key={option.id}  
            className={`p-4 border rounded-lg hover:shadow-2xl ${inputPeople==option.people && 'shadow-lg border-[2px]'}` }
            onClick={()=>setInputPeople(option.people)}>
              <h2 className='text-3xl'>{option.icon}</h2>
              <h2 className='font-bold text-lg'>{option.title}</h2>
              <h2 className='text-sm text-gray-800'>{option.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button onClick={handleSubmit}>Generate trip ✈️</Button>
      </div>
    </div>  
  )
}

export default CreateTrip
