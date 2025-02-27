const truong_hoc = ['Đinh Tiên Hoàng', 'Lê Lợi', 'Lý Thường Kiệt', 'Trần Hưng Đạo'];

const them_ten = truong_hoc.map(i => 'Trường học ' + i);
console.log(them_ten.join('\n'));
console.log(truong_hoc.join('\n'));

const tao_doituong = truong_hoc.map(i => ({ ten: i }));
console.log(tao_doituong);