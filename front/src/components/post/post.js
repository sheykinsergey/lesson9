import PropTypes from 'prop-types';

const PostComponent = ({ initPost }) => {

    const result = initPost.map(({ id, user_id, date, text, likes }) => {
        
        return (
            <div key={id}>
                <h3>PostID {id}</h3>
                <p>UserID {user_id}</p>
                <p>{text}</p>
                <small>{date}</small>
                <small> //like {likes}</small>
                <hr />
            </div>
        )
    })

    return(
        <>
            {result}
        </>
    )
}
PostComponent.propTypes = {
    initPost: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            user_id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired
        })
    )
}

export default PostComponent;