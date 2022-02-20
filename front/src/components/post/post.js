import PropTypes from 'prop-types';
import { useState } from "react";
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';

const PostComponent = ({ initPost }) => {
        
        const [modalActive, setModalActive] = useState(false);
        const showEditForm = () => {
            setModalActive(true)
        }

        const result = initPost.map(({ id, userId, date, text, vis, file }) => {
            const avatarImage = `http://localhost:3001/uploads/${userId}/avatar.jpg`
            const image = `http://localhost:3001/imgPost/${userId}/${file}`
            return (
                <Card key={id} sx={{ maxWidth: 700 }} style={{marginTop: 10}}>
                    <CardHeader
                        avatar={
                        <Avatar 
                            src={avatarImage}
                            sx={{ width: 50, height: 50 }}
                        >
                        </Avatar>
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
                        {file ? 
                            <Card sx={{ maxWidth: 150 }}>
                            <CardMedia
                                component="img"
                                image={image}
                                /> 
                                </Card>
                                : null
                        }
                        <Typography variant="body2" color="text.secondary" >
                        {text}
                        </Typography>
                        
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        
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
                vis: PropTypes.string.isRequired
            })
        )
    }

export default PostComponent;