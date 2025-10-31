import React from 'react'
import Typography from '@mui/material/Typography' 
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment } from '../../assets/redux/counterSlice'
import Primary_Button from '../common/Primary_Button';






export default function Home() {

  const count = useSelector ((state)=>state.counter.value);
  const dispatch = useDispatch(); 

  return (
  <>
   <Typography variant="h4" mx='50px' color="">{count}</Typography>
   <Primary_Button  onClick={() => dispatch(increment())} sx={{m:'50px'}}> + </Primary_Button>
   <Primary_Button  onClick={() => dispatch(decrement())} sx={{m:'50px'}}> - </Primary_Button>
  
  </> 
)}
