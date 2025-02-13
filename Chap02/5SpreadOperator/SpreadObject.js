const buoi_sang = {
    sang: 'bánh mỳ',
    trua: 'cơm tấm'
}

const toi = 'Cơm gà chiên giòn';

const ca_ngay = {
    ...buoi_sang,
    toi
}

console.log(ca_ngay);

const dia_danh = {
    mien_bac: 'hp, hni',
    mien_trung: 'dng',
    mien_nam: 'hcm'
}

const {mien_bac, ...con_lai} = dia_danh;

console.log('Miền Bắc:',mien_bac);
console.log('Địa danh còn lại:',con_lai);