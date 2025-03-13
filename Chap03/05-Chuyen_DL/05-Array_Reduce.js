const tuoi = [21, 18, 42, 40, 64, 63, 34];
const tuoi_lon_nhat = tuoi.reduce((acc, cur) => {
    console.log(`${cur} > ${acc} = ${cur > acc}`);
    return acc > cur ? acc : cur;
}, 0);

console.log('Tuổi lớn nhất:',tuoi_lon_nhat); // 64

const tuoi_lon_nhat_tiny = tuoi.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

console.log('Tuổi lớn nhất:',tuoi_lon_nhat_tiny); // 64