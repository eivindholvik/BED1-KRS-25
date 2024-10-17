
const emptyObject = {};
const nonEmptyObject = { name: "value" };
const stringContent = "string";
const numberContent = 123;
const arrayContent = ["data1", "data2", "data3"];
const dateContent = new Date();

const testData = (data) => {
  if (Object.keys(data).length === 0 && data.constructor === Object) {

    console.log('Empty Object:');
    return false;
  } else {
    console.log('Not an empty object:');
    return true;
  }
}

console.log(testData(dateContent));
