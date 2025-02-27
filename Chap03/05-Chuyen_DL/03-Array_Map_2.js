let truong_hoc = [{ten: 'Đinh Tiên Hoàng'}, {ten: 'Lê Lợi'}, {ten: 'Lý Thường Kiệt'}, {ten: 'Trần Hưng Đạo'}];

const Doi_ten = (ten_cu, ten, mang) => 
    mang.map(item => {
        if(item.ten === ten_cu) {
            return {
                ...item,
                ten
            };
        }
        return item;
    });

const doi_ten_v2 = (ten_cu, ten, mang) => 
    mang.map(item => 
        item.ten === ten_cu ? {...item, ten} : item
    );

let truong_hoc_moi = Doi_ten('Lê Lợi', 'Lê Thái Tổ', truong_hoc);
let truong_hoc_moi_v2 = Doi_ten('Lê Lợi', 'Lê Đại Hành', truong_hoc);
console.log(truong_hoc_moi[1]);
console.log(truong_hoc_moi_v2[1]);
console.log(truong_hoc[1]);