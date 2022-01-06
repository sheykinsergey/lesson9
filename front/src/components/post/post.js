export function UserPost({initPost}){

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