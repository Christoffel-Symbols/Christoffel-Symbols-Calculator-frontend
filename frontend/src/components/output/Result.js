import { Button } from '@mui/material'
import React from 'react'

const Result = () => {
  return (
    <div className='result'>
      <Button variant='outlined' size='large' sx={{
        marginBottom:'1rem'
      }}>Result</Button>
      <div style={{
        padding: '0.5rem',
        border: '3px solid black',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div>
          Christoffel Symbols (Second kind)
        </div>
        <div>
          Christoffel Symbols (First kind)
        </div>
        <div>
          Riemann Tensor (Non-zero components)
        </div>
        <div>
          Ricci Tensor
        </div>
        <div>
          Ricci Scalar
        </div>
        <div>
          Einstein Tensor (Non-zero components)
        </div>
      </div>
    </div>
  )
}

export default Result
