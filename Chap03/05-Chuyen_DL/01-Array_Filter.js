const truong_hoc = ['Đinh Tiên Hoàng', 'Lê Lợi', 'Lý Thường Kiệt', 'Trần Hưng Đạo'];

console.log(truong_hoc.join(', '));

const Đ_TruongHoc = truong_hoc.filter(i => i[0] === 'Đ');
console.log(Đ_TruongHoc.join(', '));

const Loai = (loai_bo, danh_sach) => danh_sach.filter(i => i != loai_bo);

console.log(Loai('Lê Lợi', truong_hoc).join(', '));
console.log(truong_hoc.join('\n'));
