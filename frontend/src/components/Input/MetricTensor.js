import React from 'react'
import {Button, TextField} from "@mui/material";
import { MatrixComponent } from '../CommonFormElements';
import {Formik, Form} from "formik";

const MetricTensor = ({myInitialValues}) => {
  const dummyList = ['x','y','z','t']
  const coordList = dummyList.splice(0,myInitialValues.num_coordinates)
  return (
    <div className='metricTensor'>
    <Button variant='outlined' size='large' sx={{
      marginBottom: '1rem'
    }}>Metric Tensor</Button>
      <div style={{
        border: '3px solid black',
        display: 'flex',
        padding: '1rem',
        justifyContent: 'center'
      }}>
        <div>
        {
          coordList.map((coord,index)=>{
            let row = index;
            return(
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.3rem'
              }}
              key={row}
              >
                {coordList.map((coord,index)=>{
                  let col = index;
                  return(
                    <MatrixComponent
                    key={col}
                      placeholder={'(' + String(row) + ',' + String(col) + ')'}
                      name={`metric_tensor${'[' + String(row) + ']' + '[' + String(col) + ']'}]`}
                      value={myInitialValues.metric_tensor[row,col]}
                    />
                  )
                })}
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default MetricTensor
