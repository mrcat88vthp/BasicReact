const ten = 'Mèo';
const solieu = '9387';
const tuoi = '2019';
const print = function(){
    console.log(`${ten} có số liệu ${solieu}`);
}

const funHike = {ten, solieu, print};

console.log(funHike);

funHike.print();

//new
var test = {
    ten,
    solieu,
    tuoi: '1987',
    print(){
        let temp = this.solieu.toUpperCase();
        let temp_1 = this.tuoi.toUpperCase();
        console.log(`${temp} ${temp} ${temp} !!!`);
        console.log(`Tuổi với this: ${temp_1}`);
        console.log(`Tuổi không this: ${tuoi}`);
    },
    speed(mph){
        this.toc_do = mph;
        console.log('tốc độ:', mph);
    }
}

test.print();
test.speed(500);

