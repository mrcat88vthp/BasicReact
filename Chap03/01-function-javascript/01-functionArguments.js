const vidu_1 = logger =>{
    logger('Test');
};

vidu_1(message => console.log(message));

const vidu_2 = (logger) => {
    return function(message){
        logger(message.toUpperCase() + '!!!');
    }
}

const a = vidu_2(a => console.log(a));

a('mrcat');
a('là');
a('Dũng');
a('đm. sao chúng nó nghĩ đc hay vậy. đọc mãi mới hiểu.');

const vidu_2_arrow = logger => message => logger(message.toUpperCase() + '!!!');

const b = vidu_2_arrow(a => console.log(a));
b('beo');
b('tức');
b('tiến mạnh');