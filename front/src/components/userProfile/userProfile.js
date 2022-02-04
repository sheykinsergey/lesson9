import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

    const UserProfile = ({ user, mutate, id }) => {

        const url = `http://localhost:3001/profile/${id}`
        const urlImage = `http://localhost:3001/uploads/${id}/avatar.jpg`

        const result = user.map(({id, name, email, phone, university}) => {

                const onFormSubmit = (data, actions) => {
                    mutate({ id, data });
                };

                const schema = Yup.object().shape({
                    name: Yup.string('to string').min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
                    email: Yup.string().email('Invalid email').required('Required'),
                    phone: Yup.string().required('Required'),
                    university: Yup.string().required('Required')
                })
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