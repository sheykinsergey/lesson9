import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const UsersComponent = ({ initUsers }) => {

  const result = initUsers.map(({ id, name }) => {

    return (
      <li key={id}>
        <NavLink to={`/users/${id}`}>id: {id} --- Name: {name}</NavLink>
      </li>
    )
  })

  return(
    <>
      <p>User lists:</p>
      <ul>
        {result}
      </ul>
    </>
  )
}

UsersComponent.propTypes = {
  initUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
}

export default UsersComponent;