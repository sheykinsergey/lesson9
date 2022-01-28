import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0
};

export default function EditPost({setActive}){
  const setAct = () =>{
    setActive(false)
  }
  const notClose = (e) =>{
    e.stopPropagation()
  }
  return(
    <div  onClick={setAct}>
      <div className="modal_content" onClick={notClose}>
        <Card sx={style}>
          <CardHeader
            action={
              <IconButton 
                style={{padding: 0}}
                onClick={() => setActive(false)}
              >
              <CloseIcon />
              </IconButton>
          } />
          <CardContent>
            <Typography variant="h6" component="h6">Edit Article </Typography>
              <TextareaAutosize
                minRows={10}
                placeholder="Add post"
                style={{ width: "100%" }}
              />
              <Stack direction="row" spacing={43}>
                <Button variant="contained" onClick={() => setActive(false)}>Cancel</Button>
                <Button variant="contained">Add</Button>
              </Stack>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}