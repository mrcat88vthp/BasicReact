const  mau_sac = ['đỏ', 'đen', 'đỏ', 'xanh', 'vàng', 'xanh', 'xanh', 'đen', 'xanh', 'đen', 'trắng'];

const mau_duy_nhat = mau_sac.reduce((duy_nhat, mau) => duy_nhat.indexOf(mau) !== -1 ? duy_nhat : [...duy_nhat, mau], []);

console.log(mau_duy_nhat); // [ 'đỏ', 'đen', 'xanh', 'vàng', 'trắng' ]