/* eslint-disable react-hooks/exhaustive-deps */
import { SkeletonCard } from "@/components/custom/SkeletonCard";
import { db } from "@/service/firebaseConfig";
import { useUser } from "@clerk/clerk-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import UserTripItemCard from "./components/UserTripItemCard";

const MyTrips = () => {
  const [loading, setLoading] = useState(true); // loading state management
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    if (userEmail) {
      getUserTrips();
    }
  }, [userEmail]);

  const getUserTrips = async () => {
    setLoading(true); // Start loading

    if (!userEmail) {
      toast.error('User not found');
      navigate("/");
      return;
    }

    // Clear previous trips before fetching new ones
    setUserTrips([]); 

    const q = query(collection(db, 'AITrips'), where('userEmail', '==', userEmail));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserTrips(prevValue => [...prevValue, doc.data()]);
    });

    setLoading(false); // End loading
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      

      <h2 className="font-bold text-3xl ">My Trips</h2>
      
      {loading && (
        <div className="flex gap-5 mt-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {userTrips.map((trip, index) => (
          <UserTripItemCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
