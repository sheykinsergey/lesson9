import PropTypes from 'prop-types' 

const UserProfile = ({ firstName, lastName, email, age, avatar }) => {
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>Avatar: {avatar}</p>
        </div>
    )
}

UserProfile.propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        avatar: PropTypes.string
}
UserProfile.defaultProps = {
    avatar: "/img/default.jpg"
};

export default UserProfile;