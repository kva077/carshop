const url = 'https://jsonplaceholder.typicode.com/users?_limit=3'
const url1 = 'https://jsonplaceholder.typicode.com/users?_limit=1'

let counter = 0
function count () {
    console.log("был", counter);
    return counter++;
};

const button = document.getElementById('myButton');
button.addEventListener('click', async () => {
    if(counter === 0) {
        let response = await fetch(url);
        count(counter)
        console.log(response.json())
    } else {
        let response = await fetch(url1)
        count(counter)
        console.log(response.json())
    }
    
})