const truong_hoc = {
    ten: 'Nguyễn Đình Chiểu',
    so_tang: 3,
    so_phong: 10
};

const arrTruongHoc = Object.keys(truong_hoc).map(key =>({
    name: key,
    value: truong_hoc[key]
}));

console.log(arrTruongHoc);
// Output: