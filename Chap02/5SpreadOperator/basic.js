const con_vat = ['chó', 'mèo', 'chuột'];
const do_dung = ['bàn', 'ghế'];
const chung = [...con_vat, ... do_dung];
console.log(chung);

//Ko sử dụng toán tử spread (...) => mảng khi dùng với hàm reverse() sẽ bị thay đổi thứ tự các phần tử trong mảng.
/*
const [dd_cuoi] =  do_dung.reverse();

console.log(dd_cuoi);
console.log(do_dung.join(', '));
*/

//Sử dụng toán tử spread (...)
const [dd_cuoi_1] =  [...do_dung].reverse();

console.log(dd_cuoi_1);
console.log(do_dung.join(', '));

const[cho, ...con_lai] = con_vat;
console.log('Con', cho);
console.log('Các con vật còn lại:', con_lai.join(', '));