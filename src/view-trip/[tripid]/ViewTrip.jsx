/* eslint-disable react-hooks/exhaustive-deps */

import { db } from "@/service/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import InfoSection from "../components/InfoSection"
import Hotels from "../components/Hotels"
import PlacesToVisit from "../components/PlacesToVisit"


const ViewTrip = () => {
    const {tripId}=useParams() // used for extraction of id and use as it is defined in main.jsx

    const [trip,setTrip]=useState([])
    
    // fetching trip information
    const getTripData=async()=>{
        const docRef=doc(db,'AITrips',tripId)
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
            console.log(docSnap.data())
            setTrip(docSnap.data())
        }
    }

    useEffect(()=>{
        getTripData();
    },[])
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
       {/* information section */}
       <InfoSection trip={trip}/>

       {/* recomended hotels */}
       <Hotels trip={trip}/>

       {/* activites and places to visit */}
       <PlacesToVisit trip={trip}/>
    </div>
  )
}

export default ViewTrip
