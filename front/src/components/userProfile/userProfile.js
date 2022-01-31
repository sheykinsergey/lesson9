import PropTypes from 'prop-types';
import * as Yup from 'yup';
import axios from "axios";
import { useState } from 'react';
import { useMutation } from "react-query";

import { useParams } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const UserProfile = ({ user }) => {
    const { id } = useParams();
    const url = `http://localhost:3001/profile/${id}`
    const urlImage = `http://localhost:3001/uploads/${id}/avatar.jpg`

    const result = user.map(({id, name, email, phone, university}) => {

            const [nameValue, setNameValue] = useState(name);
            const changeName = (e) => {
                setNameValue(e.target.value)
            }
            const [emailValue, setEmailValue] = useState(email);
            const changeEmail = (e) => {
                setEmailValue(e.target.value)
            }
            const [phoneValue, setPhoneValue] = useState(phone);
            const changePhone = (e) => {
                setPhoneValue(e.target.value)
            }
            const [universityValue, setUniversityValue] = useState(university);
            const changeUniversity = (e) => {
                setUniversityValue(e.target.value)
            }
        
            const onFormSubmit = (data) => {
                console.log(data);
            }

            const url = `http://localhost:3001/users/${id}`
            const mutation = useMutation((data) =>
                axios.put(url, data)
            );
            const setUser = () => {

                mutation.mutate({
                    name: nameValue,
                    email: emailValue,
                    phone: phoneValue,
                    university: universityValue
                })
            }
            const schema = Yup.object().shape({
                nameValue: Yup.string('to string').min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
                emailValue: Yup.string().email('Invalid email').required('Required'),
                phoneValue: Yup.string().required('Required'),
                universityValue: Yup.string().required('Required')
            })
            return (
                <Formik 
                    key={id}
                    initialValues={{nameValue, emailValue, phoneValue, universityValue}}
                    validationSchema={schema}
                    onSubmit={onFormSubmit}
                    >
                    <Form onSubmit={setUser}>
                        <Field 
                            style={{marginTop: 10}}
                            component={TextField}
                            name='nameValue'
                            label="Name"
                            value={nameValue}
                            onChange={changeName}
                        />
                        <br />
                        <Field
                            style={{marginTop: 10}}
                            component={TextField}
                            name="emailValue"
                            type="email"
                            label="Email"
                            value={emailValue}
                            onChange={changeEmail}
                        />
                        <br />
                        <Field
                            style={{marginTop: 10}}
                            component={TextField}
                            name="phoneValue"
                            label="Phone"
                            value={phoneValue}
                            onChange={changePhone}
                        />
                        <br />
                        <Field
                            style={{marginTop: 10}}
                            component={TextField}
                            name="universityValue"
                            label="University"
                            value={universityValue}
                            onChange={changeUniversity}
                        />
                        <br />
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
                src={urlImage}
                sx={{ width: 100, height: 100 }}
            />

            <form encType="multipart/form-data" action={url} method="post">
                <input type="file" name="avatar" />
                <button type="submit">save</button>
            </form>
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