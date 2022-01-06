import { UserPost } from "../../components/post/post";

    const initPost = [
        {
        title: "first post",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.",
        publicationDate: "30.11.2021"
        },
        {
        title: "two post",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.",
        publicationDate: "31.12.2021"
        },  
    ]

export function UserPostCon(){

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

    return <UserPost result={result}/>
}