import Post from "./Post";

function Posts() {
    const posts = [
        {
            id: 123,
            username: "hasibalasad",
            userImg: "https://avatars.githubusercontent.com/u/38139221?v=4",
            img: "https://avatars.githubusercontent.com/u/38139221?v=4",
            caption:
                "Caption testing Caption testing Caption testing Caption testing Caption testing Caption testing Caption testing Caption testing",
        },
        {
            id: 123,
            username: "hasibalasad",
            userImg: "https://avatars.githubusercontent.com/u/38139221?v=4",
            img: "https://avatars.githubusercontent.com/u/38139221?v=4",
            caption:
                "Caption testing Caption testing Caption testing Caption testing ",
        },
    ];

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts;
