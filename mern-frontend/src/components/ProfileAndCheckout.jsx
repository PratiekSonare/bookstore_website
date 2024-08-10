// profile.js
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import CheckoutCart from './CheckoutCart';
import { FaUserLarge } from "react-icons/fa6";
import './test.css';
import CheckoutCalendar from "./CheckoutCalendar";

const ProfileAndCheckout = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async (uid) => {
      try {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserProfile(user.uid);
      } else {
        setProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!profile) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  return (
  <div className="h-full w-screen mt-20">
        <div className="test-container">

          <div className="item item-1 text-black h-full w-full p-10">
            <div className="flex flex-row justify-center items-center gap-20">
              <FaUserLarge className="w-24 h-24" />
              <div>
                <h2 className="font-bold">Email:</h2>
                <h2>{profile.email}</h2>
                <br></br>
                <h2 className="font-bold">Phone Number:</h2>
                <h2>{profile.phone}</h2>
                <br></br>
                <h2 className="font-bold">Books Lended (till now):</h2>
                <h2>{}</h2>
              </div>
                
            </div>            

          </div>

          <div className="item item-2 text-black h-full w-full flex justify-center items-center p-10">
            <CheckoutCart />
          </div>


          <div className="item item-3 text-black h-full w-full flex justify-center items-center">
            <CheckoutCalendar />
          </div>
        </div>
      </div>
    );
  };


export default ProfileAndCheckout;
