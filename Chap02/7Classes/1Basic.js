class Ky_nghi {
    constructor(dia_diem, ngay_nghi){
        this.dia_diem = dia_diem;
        this.ngay_nghi = ngay_nghi;
    }

    thong_bao (){
        console.log(`Kỳ nghỉ tại ${this.dia_diem} kéo dài ${this.ngay_nghi} ngày`);
    }
}

console.log('====>Khai báo class Ky_nghi<====');
const kn = new Ky_nghi('Bà nà Hills, Đà Nẵng', 7);
kn.thong_bao();

class tham_hiem extends Ky_nghi {
    constructor(dia_diem, ngay_nghi, do_dung){
        super(dia_diem, ngay_nghi);
        this.do_dung = do_dung;
    }

    thong_bao(){
        super.thong_bao();
        console.log(`Mang theo đồ dùng ${this.do_dung.join(', ')}`);
    }
}

console.log('====>Khai báo class tham_hiem kế thừa từ class Ky_nghi<====');
const th = new tham_hiem('Cát bà Resorts, Hải Phòng', 5, [
    'Laptop',
    'Camera',
    'Kính mắt'
]);
th.thong_bao();