import { Header } from "../../containers/header/header";
import { useState } from 'react';
import { useMutation } from "react-query";
import * as Yup from 'yup';
import { serialize } from 'object-to-formdata';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { setPost, setImgPost } from '../../containers/post/api/crud'
import FormAutocomplite from "../formAutocomplite/formAutocomplite";
import Box from '@mui/material/Box';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export const AddArticle = () => {
  const userId = 8
  const img = /^image+\/(jpg|jpeg)$/
  const sizeFile = 10000000
  const [image, setImage] = useState();
  const [croppedImage, setCroppedImage] = useState();
  const [cropper, setCropper] = useState();
  const [imageToBlob, setImageToBlob] = useState();
  const [fileName, setFileName] = useState();
  

  
  const handleChange = e => {
    e.preventDefault();
    const file = e.target.files[0]
    
    if(file.type.match(img) && file.size < sizeFile){
        const reader = new FileReader()
        reader.onload = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
        setFileName(file.name)
    }else{
        console.error("Wrong file format or size")
    }
  }
  const cropImage = () => {
    if(typeof cropper !== 'undefined'){
        setImageToBlob(cropper.getCroppedCanvas())
        setCroppedImage(cropper.getCroppedCanvas().toDataURL())
        setImage(null)
    }
  }
  const deleteImage = () => {
      setCroppedImage(null)
      setImage(null)
  }
  const mutation = useMutation((data) => setPost(data));
  const mutationFoto = useMutation((data) => setImgPost(data));

  const onFormSubmit = (data, actions) => {
    actions.setSubmitting(true);

    const formData = serialize(data)

    if (croppedImage) {
      imageToBlob.toBlob(function(imageToBlob) {
        formData.append('imgPost', imageToBlob, fileName)
        mutationFoto.mutate(formData)
      }, "image/jpeg", 1);
    }else{
      mutation.mutate(formData)
    }
    actions.setSubmitting(false);
  };

  const schema = Yup.object().shape({
    text: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required text'),
    visibility: Yup.string().required()
  });

  const options = [
    {value: 'all', label: 'All'},
    {value: 'friends', label: 'Friends'},
    {value: 'me', label: 'Me'}
  ]
  
  return(
  <>

  <Container maxWidth="md">
  <Typography variant="h5" component="h5">Add Post</Typography>
    <Formik
      initialValues={{
        userId: userId,
        text: '',
        date: new Date(),
        visibility: ''
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
          <Field
            component={FormAutocomplite}
            name="visibility"
            label="Visible to"
            options={options}
          />
            <Box margin={1}>
              <img width="100" src={croppedImage ? croppedImage : null} />
            </Box>
          <Box marginTop={1} >
                    {!image &&<Button variant="contained" component='label'>
                    Choose image
                        <input type='file' name='imgPost' hidden onChange={handleChange}/>
                    </Button>}
                    {image && <Button variant="contained" onClick={deleteImage}>Delete image</Button>}
                    {image && (
                        <Cropper 
                            src={image}
                            onInitialized={instance => setCropper(instance)}
                            viewMode={2}
                        />
                    )}
                    {image && (
                        <Button variant="contained" onClick={cropImage}>Crop</Button>
                    )}

                </Box>
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

