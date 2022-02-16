import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useState } from 'react';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import FormAutocomplite from "../formAutocomplite/formAutocomplite";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Box from '@mui/material/Box';

    const UserProfile = ({ user, mutate, mutateAvatar, id }) => {

        const url = `http://localhost:3001/profile/${id}`
        const avatarImage = `http://localhost:3001/uploads/${id}/avatar.jpg`

        const img = /^image+\/(jpg|jpeg)$/
        const sizeFile = 10000000
        const [image, setImage] = useState();
        const [croppedImage, setCroppedImage] = useState();
        const [cropper, setCropper] = useState();
        const [imageToBlob, setImageToBlob] = useState();
        
        const handleChange = e => {
            e.preventDefault();
            const file = e.target.files[0]
            
            if(file.type.match(img) && file.size < sizeFile){
                const reader = new FileReader()
                reader.onload = () => {
                    setImage(reader.result)
                }
                reader.readAsDataURL(file)
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

    
        const result = user.map(({id, name, email, phone, university}) => {

                const onFormSubmit = (data, actions) => {
                    actions.setSubmitting(true);
                    mutate({id, data});

                    if (croppedImage) {

                        imageToBlob.toBlob(function(imageToBlob) {

                            const data = new FormData()
                            data.append('avatar', imageToBlob, 'file.jpg')
                            mutateAvatar({id, avatar: data})
                        }, "image/jpeg", 1);
                        
                    }

                    actions.setSubmitting(false);
                };

                const schema = Yup.object().shape({
                    name: Yup.string('to string').min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
                    email: Yup.string().email('Invalid email').required('Required'),
                    phone: Yup.string().required('Required'),
                    university: Yup.string().required('Required')
                })
                const options = [
                    {value: 'all', label: 'All'},
                    {value: 'friends', label: 'Friends'},
                    {value: 'me', label: 'Me'}
                ]
                
                return (
                    <Formik 
                        key={id}
                        onSubmit={onFormSubmit}
                        initialValues={{name, phone, email, university}}
                        validationSchema={schema}
                        >
                        <Form>
                            <Field 
                                style={{marginTop: 10}}
                                component={TextField}
                                name='name'
                                label="Name"
                            />
                            <br />
                            <Field
                                style={{marginTop: 10}}
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                            />
                            <br />
                            <Field
                                style={{marginTop: 10}}
                                component={TextField}
                                name="phone"
                                label="Phone"
                            />
                            <br />
                            <Field
                                style={{marginTop: 10}}
                                component={TextField}
                                name="university"
                                label="University"
                            />
                            <br />
                            <Field
                                component={FormAutocomplite}
                                name="visibility"
                                label="Visible to"
                                options={options}
                            />
                            <Button
                                style={{marginTop: 10}}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >Save
                            </Button>
                        </Form>
                    </Formik>
                )
        })

        return (
            <Container maxWidth="md">
                <Typography variant="h5" component="h5">My Profile</Typography>
                <Avatar
                    alt="Remy Sharp" 
                    // src={croppedImage ? croppedImage : urlImage}
                    src={avatarImage}
                    sx={{ width: 100, height: 100 }}
                />
                <Box marginTop={1} >
                    {!image &&<Button variant="contained" component='label'>
                    Choose image
                        <input type='file' name='avatar' hidden onChange={handleChange}/>
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
                {/* <form encType="multipart/form-data" action={url} method="post">
                    <input type="file" name="avatar" />
                    <button type="submit">save</button>
                </form> */}
                {result}
            
            </Container>
        )
    }

    UserProfile.propTypes = {
        user: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                phone: PropTypes.string.isRequired,
                university: PropTypes.string.isRequired
            })
        )
    }

    export default UserProfile;