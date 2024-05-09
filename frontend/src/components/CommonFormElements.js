import React, { useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Field, FieldAttributes, useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import '../App.css'

function createMatrix(numCoords) {

  var dummyList = [];
  for(let row = 0; row < numCoords; row++){
    var arr = [];
    for (let col = 0; col < numCoords; col++){
        arr.push(0);
    }
    dummyList.push(arr);
}

  return dummyList;
}

export const CommonTextField = ({placeholder, label, disabled=false, required=false, fullWidth=false, ...props}) => {

    const [field, meta] = useField(props);
    const errorText = meta.error || meta.touched ? meta.error : ''

    return (
        <Field
        inputProps={{
          style: {
            fontFamily: "Roboto,sans-serif;",
            fontSize: '1.5rem',
            fontWeight: '200',
          }
        }}
        placeholder={placeholder}
        label={label}
        as={TextField}
        type="input"
        fullWidth={fullWidth}
        disabled={disabled}
        required={required}
        helperText = {errorText}
        error={!!errorText}
        {...field}
        />
    );
};

export const CommonCheckBox = ({values, label, ...props}) => {
    
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    
    return (
        <FormControlLabel 
        name={field.name}
        onChange={(e)=>{
            setFieldValue(String(field.name), e.currentTarget.checked);
        }}
        control={<Checkbox checked={values}/>} 
        label={label}
        />
        )
        
    }
    
export const CommonSelect = ({values, label, ...props}) => {
        
        const { setFieldValue } = useFormikContext();
        const [field] = useField(props);
        
        return (
            <Box sx={{ minWidth: 120, padding: '1rem' }}>
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
              name={field.name}
              value={values.num_coordinates}
              onChange={(e)=> {
                  setFieldValue(String(field.name), e.target.value)
                  setFieldValue('metric_tensor', createMatrix(e.target.value))
                }}
                label={label}
                autoWidth
                >
              {props.options.map((option)=>{
                  return(
                      <MenuItem value={option} key={option}>{option}</MenuItem>
                      )
                    })}
            </Select>
          </FormControl>
      </Box>
  )
  
}

export const MatrixComponent = ({placeholder, fullWidth=false, ...props}) => {

    const [field, meta] = useField(props);
    const errorText = meta.error || meta.touched ? meta.error : ''

    return (
        <Field
        inputProps={{
          style: {
            fontFamily: "Roboto,sans-serif;",
            fontSize: '1.5rem',
            fontWeight: '200',
          }
        }}
        placeholder={placeholder}
        as={TextField}
        type="input"
        helperText = {errorText}
        error={!!errorText}
        {...field}
        />
    );
};

export const CalculateButton = ({isSubmitting}) => {
  return (
    <LoadingButton
    type="Submit"
    disabled={isSubmitting}
    size="large"
    variant="contained"
    style={{ width: "25%", fontSize: 24, margin: 16 }}
    loading={isSubmitting}
    loadingIndicator="Calculating..."
    >
    Calculate
    </LoadingButton>
  )
}