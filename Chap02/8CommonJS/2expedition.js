class Ky_nghi {
    constructor(dia_diem, ngay_nghi){
        this.dia_diem = dia_diem;
        this.ngay_nghi = ngay_nghi;
    }

    thong_bao (){
        console.log(`Kỳ nghỉ tại ${this.dia_diem} kéo dài ${this.ngay_nghi} ngày`);
    }
}

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

module.exports = new tham_hiem ('Cát bà resorts, Hải Phòng', 3, ['Laptop', 'Kính mắt']);
