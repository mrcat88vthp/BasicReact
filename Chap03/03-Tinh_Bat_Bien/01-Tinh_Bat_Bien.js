let mau_sac_co = {
    tieu_de: "cỏ",
    mau_sac: "#00FF00",
    danh_gia: 0
}

/*Viết hàm như này sẽ thay đổi dữ liệu ban đầu.
function danh_gia_mau(mau_sac, danh_gia){
    mau_sac.danh_gia = danh_gia;
    return mau_sac
}
*/

/* Cách viết ko làm thay đổi dữ liệu ban đầu */
const danh_gia_mau = function(mau_sac, danh_gia){
    return Object.assign({}, mau_sac,  {danh_gia: danh_gia});
}

console.log(danh_gia_mau(mau_sac_co, 5).danh_gia);
console.log(mau_sac_co.danh_gia);

const danh_gia_mau_1 = (mau_sac, danh_gia) => ({
    ...mau_sac,
    danh_gia
});

console.log(danh_gia_mau_1(mau_sac_co, 5).danh_gia);
console.log(mau_sac_co.danh_gia);