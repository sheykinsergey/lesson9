import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const UserComponent = ({user}) => {
  const { id } = useParams();
  
  const result = user.map(({id, name, email, phone, university}) => {
    return (
      <div key={id}>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>university: {university}</p>
      </div>
    )
  })
  return (
    <>
      {id.match(/^[0-9]+$/) ? result : <div>incorrect id</div>}
      <form enctype="multipart/form-data" action="http://localhost:3001/avatar" method="post">
        <input type="file" name="avatar" />
        <input type="text" name="id" />
        <button type="submit">save</button>
      </form>
    </>
  )
}
UserComponent.propTypes = {
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
export default UserComponent;