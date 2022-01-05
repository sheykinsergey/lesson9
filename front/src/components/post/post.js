export function UserPost({title, post, publicationDate}){
    return(
        <div>
            <h3>{title}</h3>
            <p>{post}</p>
            <small>Дата публикации: {publicationDate}</small>
        </div>
    )
}