const posts = [
    {
        id: 1,
        title: "First post"
    },
    {
        id: 2,
        title: "Second post"
    },
    {
        id: 3,
        title: "Last one"
    }
];

//Gets the objects that have in their titles the word post in it
const postWithPost = posts.filter(post => {return post.title.includes("post")})
postWithPost.map(post => {console.log(post.title)})
    