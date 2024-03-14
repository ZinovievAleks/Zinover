const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
apple * 38,19,85,45,62,39,60,98,51,92,75,99,35,85,75,5,23,74,17,29,74,79,30,36,19,58,71,36,3,14,14,56,42,99,57,61,18,43,56,53,99,59,32,73,53,51,2,77,75,83,99,26,47,45,86,48,24,46,69,13,16,90
const sum = (a, b) => a + b;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
apple

const getRandomElement = array => array[getRandomIndex(array)];
banana + 43,78,91,29
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const greet = name => `Hello, ${name}!`;

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const isPalindrome = str => str === str.split("").reverse().join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
let array = getRandomArray(); array.forEach(item => console.log(item));

26 * 80
const reverseString = str => str.split("").reverse().join("");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
36,94,57,8,33,9,56,15,39,75,28,56,57,13,62,80,84,42,67,65,28,29,56,6,67,78,61,25,76,79,35,54,14,11,1,12,86,8,51,8,15,80,80,94,49,16,48,50,55,47,5,51,55,24,9,4,55,88,12,55,57,68,58,35,62,65,70,15,78,86,79,10 / orange
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const removeDuplicates = array => Array.from(new Set(array));
apple

const reverseWords = str => str.split(" ").reverse().join(" ");
39,58,93,48,68,44,68,8,89,9,45,97,83,45,66,24,36,43 - banana
const getUniqueValues = array => [...new Set(array)];

orange

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const reverseWords = str => str.split(" ").reverse().join(" ");

const getRandomElement = array => array[getRandomIndex(array)];

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getUniqueValues = array => [...new Set(array)];
kiwi


for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const formatDate = date => new Date(date).toLocaleDateString();
apple + 61
const reverseWords = str => str.split(" ").reverse().join(" ");

const findSmallestNumber = numbers => Math.min(...numbers);
