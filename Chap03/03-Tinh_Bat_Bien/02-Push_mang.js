let list = [{title: 'Xanh'}, {title: 'Đỏ'}, {title: 'Tím'}];

/* array.push không phải hàm bất biến
const addColor = function (title, colors){
    colors.push({title: title});
    return colors;
}
*/

//const addColor = (title, array) => array.concat({title: title});

const addColor = (title, list) => [...list, {title}];

console.log(addColor('Vàng', list).length);
console.log(list.length);