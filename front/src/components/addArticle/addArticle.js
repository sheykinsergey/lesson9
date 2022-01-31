import { useState } from "react";
import { Header } from "../../containers/header/header";
import { useMutation } from "react-query";
import axios from "axios";
import * as Yup from 'yup';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';


export function AddArticle() {
  
  const url = `http://localhost:3001/posts`
  const mutation = useMutation((data) =>
    axios.post(url, data)
  );


  const [textAreaValue, setTextAreaValue] = useState("");

  const setPost = () => {
    mutation.mutate({
      userId: 8,
      text: textAreaValue,
      date: new Date()
    })
  }
  const handleTextArea = (e) =>{
    setTextAreaValue(e.target.value)
  }
  const schema = Yup.object().shape({
    textAreaValue: Yup.string('to string').min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
})
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h5" component="h5">Add Post</Typography>
        <Formik 
          initialValues={textAreaValue}
          validationSchema={schema}
        >
          <Form onSubmit={setPost}>
            <Field
              component={TextField}
              label="Add Post"
              multiline
              name="textAreaValue"
              maxRows={7}
              value={textAreaValue}
              onChange={handleTextArea}
            />
            <br />
            <Button 
              variant="contained"
              type="submit"
            >Add Post</Button>
          </Form>
        </Formik>

      </Container>
    </>
  );
}
