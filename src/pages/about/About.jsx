import React, { useEffect } from 'react'
import Features from '../../components/about/Features';
import Our_Store from '../../components/about/Our_Store';
import Details from '../../components/about/Details';
import Persons from '../../components/about/Persons';




export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Our_Store/>
    <Details/>
    <Persons/>
    <Features/>
    
    </>
  )
}
