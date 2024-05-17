const username = "Joshy";
let loggedIn = false;
const post =
{
    id: 0,
    title: "Baddie"
}

//Makes it so that you are unable to change the contents of the post object
Object.freeze(post)