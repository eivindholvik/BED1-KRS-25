let count = 0;
const increase = () => count++;
const decrease = () => count--;
const getCount = () => count;


// module.exports = {
//   getCount,
//   increase,
//   decrease
// }

export { increase, decrease, getCount };