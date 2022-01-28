import PropTypes from 'prop-types';
import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import EditPost from './modal/modal';
import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

const PostComponent = ({ initPost }) => {

    const [modalActive, setModalActive] = useState(false);
    const showEditForm = () => {
        setModalActive(true)
    }

    const result = initPost.map(({ id, userId, date, text, likes }) => {
        return (
            <Card key={id} sx={{ maxWidth: 700 }} style={{marginTop: 10}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>
                    }
                    action={
                    <>
                    {userId === 8 ? 
                        <>
                            <Link to={`/posts/${id}`} style={{ textDecoration: 'none' }}><EditIcon/></Link>
                            <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}><DeleteIcon/></Link>
                        </>
                    : null}
                    </>
                    }
                    title={userId}
                    subheader={date}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary" >
                    {text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    {likes}
                    </IconButton>
                </CardActions>
            </Card>
        )
    })

    return(
        <Container maxWidth="md" style={{ marginTop: 20 }}>
            {result}
            {modalActive && 
            <EditPost setActive={setModalActive} />
            }
        </Container>
        
        
    )
}
PostComponent.propTypes = {
    initPost: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            userId: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })
    )
}

export default PostComponent;