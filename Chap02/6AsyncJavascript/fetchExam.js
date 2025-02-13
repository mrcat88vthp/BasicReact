fetch('https://api.randomuser.me/?nat=US&results=1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 
