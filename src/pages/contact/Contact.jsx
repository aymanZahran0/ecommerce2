import React, { useEffect } from 'react'
import Contact_Slice from '../../components/contact/Contact_Slice';


export default function Contact() {


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
      
  return (
    <>
      <Contact_Slice/>
    </>
  )
}
