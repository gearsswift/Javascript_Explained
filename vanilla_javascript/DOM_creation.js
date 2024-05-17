const postsArray = [
    {
        id: 1,
        slug: "#first-post",
        title: "First post"
    },
    {
        id: 2,
        slug: "#second-post",
        title: "Second post"
    },
    {
        id: 3,
        slug: "#last-one",
        title: "Last one"
    }
    ];
        postsArray.map(post => {
    // Create post markup
    const root = document.getElementById("root");
    const h2 =  document.createElement(`h2`);
    const a = document.createElement("a");
    a.setAttribute("href",`${post.slug}-post`)
    const text =  document.createTextNode(post.title)
    a.appendChild(text);
    h2.appendChild(a);
    root.appendChild(h2);
    // Append markup to posts container
    });
    