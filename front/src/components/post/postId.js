import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import Container from '@mui/material/Container';
import { TextField } from 'formik-mui';
import FormAutocomplite from "../formAutocomplite/formAutocomplite";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


  const PostIdComponent = ({post, mutate, mutateImgPost}) => {
    
    const result = post.map(({id, userId, text, date, vis, file})=>{

      // const id = 8
      const img = /^image+\/(jpg|jpeg)$/
      const sizeFile = 10000000
      const [image, setImage] = useState();
      const [croppedImage, setCroppedImage] = useState();
      const [cropper, setCropper] = useState();
      const [imageToBlob, setImageToBlob] = useState();
      const [fileName, setFileName] = useState();
      const [imagePost, setImagePost] = useState(`http://localhost:3001/imgPost/${userId}/${file}`)
      const [editFileName, setEditFileName] = useState()
      
      const handleChange = e => {
        e.preventDefault();
        const f = e.target.files[0]
        console.log(f);
        
        if(f.type.match(img) && f.size < sizeFile){
            const reader = new FileReader()
            reader.onload = () => {
                setImage(reader.result)
            }
            reader.readAsDataURL(f)
            setFileName(f.name)
            // file = f.name
            setEditFileName(f.name)
        }else{
            console.error("Wrong file format or size")
        }
      }
      const cropImage = () => {
        if(typeof cropper !== 'undefined'){
            setImageToBlob(cropper.getCroppedCanvas())
            setCroppedImage(cropper.getCroppedCanvas().toDataURL())
            setImagePost(image)
            setImage(null)
        }
      }
      const deleteImage = () => {
          setCroppedImage(null)
          setImage(null)
      }

      const onFormSubmit = (data, actions) => {
        actions.setSubmitting(true);
        console.log({data});
        mutate({data})
        if (croppedImage) {

          imageToBlob.toBlob(function(imageToBlob) {
            const imgPost = new FormData()
            imgPost.append('imgPost', imageToBlob, fileName)
            mutateImgPost({userId: userId, imgPost: imgPost})
          }, "image/jpeg", 1);
        }
        
        actions.setSubmitting(false);
      };

      const schema = Yup.object().shape({
        id: Yup.number().positive().required(),
        userId: Yup.number().positive().required(),
        text: Yup.string().min(3, 'Too Short!').required('must be required'),
        date: Yup.string().required('must be required'),
        vis: Yup.string().required('must be required'),
        // fileName: Yup.string()
      })
      const options = [
        {value: 'all', label: 'All'},
        {value: 'friends', label: 'Friends'},
        {value: 'me', label: 'Me'}
      ]
      return (
        <Formik 
          key={id}
          initialValues={{id, userId, text, date, vis, file}}
          validationSchema={schema}
          onSubmit={onFormSubmit}
        >
        {({errors, touched }) => 
        <>
          <Form >

          {file ? 
                            <Card sx={{ maxWidth: 150 }}>
                            <CardMedia
                                component="img"
                                image={imagePost}
                                /> 
                                </Card>
                                : null
                        }<br/>

          {errors.text && touched.text ? (<div>{errors.text}</div>) : null}
            <Field 
              component={TextField}
              label="Edit Post"
              multiline
              maxRows={10}
              fullWidth
              name='text'
            />
            <Field
              component={FormAutocomplite}
              name="vis"
              label="Visible to"
              options={options}
            />
            <Field
              component={TextField}
              name='file'
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
              style={{marginTop: 10}}
              variant="contained"
              color="primary"
              type="submit"
            >Save
            </Button>
          </Form>
          </>
        }
        </Formik>
      )
    })
    
    return(
      <> 
        <Container maxWidth="md">
              <Typography variant="h5" component="h5">Edit Post</Typography>

                {result}
              
          </Container>
      </>
    )
  }

  PostIdComponent.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            userId: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            vis: PropTypes.string.isRequired
        })
    )
  }
export default PostIdComponent;