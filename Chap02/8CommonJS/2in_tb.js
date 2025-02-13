const in_tb = (tin) => log(tin, new Date());

const log = (tin, thoi_gian) => {
    console.log(`${thoi_gian}: ${tin}`);
}

module.exports = {in_tb, log}
