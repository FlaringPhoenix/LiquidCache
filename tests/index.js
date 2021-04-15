const cache = require('../src');

const testObject = {
    value: "hello"
}

const testString = "hi";
const testNumber = 1;
const testArray = [testObject, testString, testNumber];

cache.set("testObject", testObject);
cache.set("testString", testString);
cache.set("testNumber", testNumber);
cache.set("testArray", testArray);

console.log(cache.get("testObject"));
console.log(cache.get("testString"));
console.log(cache.get("testNumber"));
console.log(cache.get("testArray"));

console.log(cache.getAll());

cache.settings({
    debug: true,
    deletionInterval: 0,
});

// Test cache delete
(async function () {

    const testTime = 'time';
    cache.set("testTime", testTime, 5000);
    console.log(cache.get("testTime"));

    // Check if it's delete
    setTimeout(function() {
        console.log(cache.get("testTime"));
    }, 15000);

}());