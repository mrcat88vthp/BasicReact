const test = (dk, func_dung, func_sai) => dk ? func_dung() : func_sai();

const tb_xin_chao = () => console.log('Xin chào');
const tb_ko_quyen = () => console.log('Không có quyền');

test(true, tb_xin_chao, tb_ko_quyen); // Xin chào
test(false, tb_xin_chao, tb_ko_quyen); // Không có quyền