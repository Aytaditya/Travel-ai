import { Button } from "../ui/button"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 mt-16">
      <h1 className="font-extrabold text-4xl text-center">
        <span className="text-[#4F46E5]">Discover your new adventure with AI:</span> personalized recommendations on your fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">Your personal trip planner and travel curator, creating custom itinearies tailored to your interest and budget</p>
      <Link to="/create-trip">
        <Button>Get started for free</Button>
      </Link>
    </div>
  )
}

export default Hero
