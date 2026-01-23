// // const hei = function (x) {
// //     return `Hei ${x}`;
// // };

// // console.log(hei("Eivind"));

// let color = "blue";

// function decide(x) {
//     if (color === "green") {
//         return x;
//     }
//     color = "green";
//     return x * x;
// }

// function decide2(color, x) {
//     if (color === "green") {
//         return x;
//     }
//     return x * x;
// }

// // let counter = 0;
// // function increment() {
// //     // impure function because we are modifying a value
// //     // outside of our function
// //     counter += 1;
// //     return counter;
// // }

// function counterr() {
//     let i = 0;
//     return () => {
//         i++;
//         console.log(i);
//         return i;
//     };
// }

// const count1 = counterr();

// count1();
// count1();
// count1();
// count1();

const myFirst = [1, 2, 3, 4, 5, 6, 7];
const mySecond = myFirst
    .map((item, index, originalArray) => {
        // console.log(item, index, originalArray);
        return item + originalArray[index + 1];
    })
    .filter((item) => item % 2 === 1)
    .reduce((red, item, index, orgArr) => {
        console.log(item);
        red += item;
    }, 0);
console.log(mySecond);
