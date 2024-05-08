import React from 'react'
import { Button } from '@mui/material';

import '../../App.css'


const TabMenu = ({setSelected}) => {

  return (
    <div className='menu'>
        <Button variant='outlined' size='large' onClick={()=>setSelected('ABOUT')}>ABOUT</Button>
        <Button variant='outlined' size='large' onClick={()=>setSelected('EXAMPLES')}>EXAMPLES</Button>
        <Button variant='outlined' size='large' onClick={()=>setSelected('QUICK GUIDE')}>QUICK GUIDE</Button>
        <Button variant='outlined' size='large' onClick={()=> setSelected('OPTIONS')}>OPTIONS</Button>
    </div>
  )
}

export default TabMenu
