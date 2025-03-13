const colors = [
    {
        id: "1.1.1",
        title: 'red',
        rating: 3
    },
    {
        id: "1.1.2",
        title: 'green',
        rating: 2
    },
    {
        id: "1.1.3",
        title: 'blue',
        rating: 1
    },
    {   
        id: "1.1.4",
        title: 'yellow',
        rating: 5
    }
];

const a = {
    id: "1.1.1",
    title: 'red',
};
console.log(a["id"]); // 1.1.1

const colorsObject = colors.reduce((obj, {id, title, rating}) => {
    obj[id] = {title, rating};
    return obj;
}, {});

console.log(colorsObject["1.1.1"]); // { title: 'red', rating: 3 }

