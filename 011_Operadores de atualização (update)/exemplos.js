// $inc
db.blog.insertMany([ 
    { 
        author: "Matheus Battisti", 
        postCount: 10, 
        likesReceived: 150, 
        categories: [
            "PHP", 
            "JavaScript", 
            "MongoDB"
        ], 
        active: true, 
        maxPosts: 100 
    }, 
    { 
        author: "Jhon Doe", 
        postCount: 219, 
        likesReceived: 12890, 
        categories: [
            "Java", 
            "C#",
            "C"], 
        active: false, 
        maxPosts: 100 
    }, 
    { 
        author: "Maria Marin", 
        postCount: 8, 
        likesReceived: 12, 
        categories: [
            "Linux", 
            "DevOps", 
            "Docker"
        ], 
        active: true, 
        maxPosts: 100 
    }, 
])