import  { Name }  from "../PropTypes/propName";

const ProfileUser = ({user}) => {
  
  const files = user.files.map((value, idx) => {

    return(
        <ul key={idx}>
          <li>id: {value.id}</li>
          <li>name: {value.name}</li>
          <li>path: {value.path}</li>
        </ul>
    )
  })

  return (
      <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Avatar: </p>
          <ul>
            <li>id: {user.avatar.file.id}</li>
            <li>name: {user.avatar.file.name}</li>
            <li>path: {user.avatar.file.path}</li>
          </ul>
          <p>Files: </p>
          {files}
          <p>Addrr:</p>
          <i>line1: {user.addrr.main.line1} </i>
          <i>line2: {user.addrr.main.line2} </i>
          <i>city: {user.addrr.main.city} </i>
          <i>zip: {user.addrr.main.zip} </i>
          <p>Friends: </p>
          <p>Name: {user.friends[0].name}</p>
          <p>Age: {user.friends[0].age}</p>
          <p>Friends/Avatar: </p>
      </div>
  )
}

ProfileUser.propTypes = {
  user: Name
}


export default ProfileUser;