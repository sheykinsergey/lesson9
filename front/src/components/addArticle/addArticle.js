import { Header } from "../../containers/header/header";
import { useMutation } from "react-query";
import * as Yup from 'yup';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { setPost } from '../../containers/post/api/crud'

export const AddArticle = () => {
  const mutation = useMutation((data) => setPost(data));

  const onFormSubmit = (data) => {
    mutation.mutate(data)
  };
  const schema = Yup.object().shape({
    text: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required text')
  });
  const id = 7

  return(
  <>
  <Header />
  <Container maxWidth="md">
  <Typography variant="h5" component="h5">Add Post</Typography>
    <Formik
      initialValues={{
        userId: id,
        text: '',
        date: new Date()
      }}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            label="Add Post"
            name="text"
            />
          {errors.text && touched.text ? (
            <div>{errors.text}</div>
          ) : null}
          <br />
          <Button 
            variant="contained"
            type="submit"
          >Add Post
          </Button>

        </Form>
      )}
    </Formik>
    </Container>
  </>
  )
};

