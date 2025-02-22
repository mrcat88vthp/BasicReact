const truong_hoc = ['Đinh Tiên Hoàng', 'Lê Lợi', 'Lý Thường Kiệt', 'Trần Hưng Đạo'];

console.log(truong_hoc.join(', '));

const Đ_TruongHoc = truong_hoc.filter(i => i[0] === 'Đ');
console.log(Đ_TruongHoc);