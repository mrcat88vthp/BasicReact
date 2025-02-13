var bat_dau = 'Bắt đầu';

function Chi_Dan(...args){
    console.log(`Số lượng phần tử của tham số mảng args: ${args.length} tham số. Nội dung tham số:`, args.join(', '));
    let [bat_dau, ...con_lai] = args;
    let [ket_thuc, ...dung_lai] = args.reverse();
    
    console.log(`Phần từ đầu tiên: ${bat_dau}`);
    console.log(`Phần từ cuối cùng: ${ket_thuc}`);
    console.log(`Mảng dung_lai(đã bị đảo ngược):`, dung_lai.join(', '));
}

Chi_Dan('trên', 'dưới', 'trái', 'phải', 'đằng trước', 'đằng sau');