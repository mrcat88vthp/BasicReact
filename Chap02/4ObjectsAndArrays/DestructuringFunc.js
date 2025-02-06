const lanh_chua = ten_nguoi => {
    console.log(`Ngài ${ten_nguoi.ten} của vùng Đông bắc`)
};

const ten_nguoi = {
    ten: 'Dũng',
    ho: 'Phạm Anh'
};

lanh_chua(ten_nguoi);

const lanh_chua_des = ten => {
    console.log(`Ngài ${ten} của vùng Đông bắc`)
};

const ten_nguoi_des = {
    ten: 'Cat',
    ho: 'Mr'
};

lanh_chua(ten_nguoi_des);

const lanh_chua_vc = ({ vc:{ten}}) => {
    console.log(`Ngài ${ten} của vùng Đông bắc`)
};

const ten_nguoi_vc = {
    ten: 'Cat',
    ho: 'Mr', 
    vc: {
        ten: 'huong',
        ho: 'Do'
    }
};

lanh_chua_vc(ten_nguoi_vc);