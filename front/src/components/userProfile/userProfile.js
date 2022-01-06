export function UserProfile({ firstName, lastName, email }){
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>last Name: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    )
}