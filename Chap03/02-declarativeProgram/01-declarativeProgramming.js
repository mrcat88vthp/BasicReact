const chuoi = 'Restaurants in Ha Noi';
var urlThanThien = '';

//Cách làm thông thường
for(var i = 0; i < chuoi.length;i++){
    if (chuoi[i] === ' '){
        urlThanThien += '-';
    }
    else{
        urlThanThien += chuoi[i];
    }
}

console.log('Kết quả lập trình thông thường:', urlThanThien);

//Lập trình khai báo
urlThanThien = chuoi.replace(/ /g, '-');
console.log('Kết quả lập trình khai báo:', urlThanThien);