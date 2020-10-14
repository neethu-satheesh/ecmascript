// The word “async” before a function means one simple thing: a function always returns a promise. 
// Other values (non-promises) are wrapped in a resolved promise automatically.
// The keyword await makes JavaScript wait until that promise settles and returns its result.
// If we try to use await in non-async function, there would be a syntax error:


const fetch = require("node-fetch");
async function hello() {
    return "Hello"
}

hello().then(console.log)

async function showAvatar() {
    const name = 'git'
    const response = await fetch('https://api.github.com/users/' + name)
    const responseObj = await response.json()
    console.log(responseObj.avatar_url)
}

showAvatar().catch(console.log)