const tmp = {
    "name": "John",
    "age": 30,
    canRead: false,
    canWrite: false
}

/* hàm không thuần túy
function selfEducation() {
    tmp.canRead = true;
    tmp.canWrite = true;
    return tmp;
}
*/

//Hàm thuần túy
const selfEducation = (person) => ({    
    ...person,
    canRead: true,
    canWrite: true    
})

console.log(selfEducation(tmp));
console.log(tmp);