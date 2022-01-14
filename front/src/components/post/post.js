import PropTypes from 'prop-types';

const UserPost = ({initPost}) => {

    const result = initPost.map((post, idx) => {
        
        return (
            <div key={idx}>
                <h3>{post.title}</h3>
                <p>{post.post}</p>
                <small>{post.publicationDate}</small>
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

UserPost.propTypes = {
    initPost: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            post: PropTypes.string.isRequired,
            publicationDate: PropTypes.string.isRequired
        })
    )
}

export default UserPost;