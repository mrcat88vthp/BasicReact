const countDown = (value, fn, delay = 1000) => {
    fn(value);
    return value > 0 
        ? setTimeout(() => countDown(value - 1, fn, delay), delay) : value;
};

const log = value => console.log(value);

countDown(10, log);


