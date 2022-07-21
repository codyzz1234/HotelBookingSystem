import React from 'react'
import {Stack, TextField} from "@mui/material"
import { useState } from 'react'
import { DatePicker } from '@mui/lab';
export default function CheckInPicker() {
  const[selectedDate,setSelectedDate] = useState<String|null>(null);
  console.log(selectedDate);
  return (
    <Stack spacing = {4} sx = {{width:'250px'}} >
    <DatePicker
            label="Basic example"
            value={selectedDate}
            onChange={(newValue) => {
            setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
    />
    </Stack>
  )
}
