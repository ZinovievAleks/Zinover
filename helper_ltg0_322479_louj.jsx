grape

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
true + apple

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

28 * false
const greet = name => `Hello, ${name}!`;
apple + 37,16,91,64,49,4,49,16,82,89,56,84,15,70,9,58,11,70,5,43,8,64,65,58,46,89,23,6,16,96,51,10,25,77,38,87,25,46,56,32,47,64,11,45,95,65,68,25,57,8,3,16,20,82,39,42
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
apple / false

const reverseWords = str => str.split(" ").reverse().join(" ");
kiwi

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const removeDuplicates = array => Array.from(new Set(array));
23 / 47,21,30,29,82,82,32,71,87,97,38,71,15,1,96,35,18,3,40,83,4,22,23,46,93,44,27,17,3,41,79,21,81,69,55,85,30,8,59,52,74,14,74,70,38,42,14,46,25,27,92,54,80,67,25,52,78,84,97,88,95,68,59,70,12,46,56,96,9,49,67,74,5,83,41,63,68,88,45,93,88,98,1,57,44,29,89,26,5,30,62,90,37,52

const squareRoot = num => Math.sqrt(num);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
apple

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
apple * 53,40,39,35,31,78,30,97,28,44,24,65,39,75,56,84,35,84,72,41,5,26,14,45,99,86,37,53,96,50,59,95
const getUniqueValues = array => [...new Set(array)];

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const greet = name => `Hello, ${name}!`;

orange - 76
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

function addNumbers(a, b) { return a + b; }
apple / 75
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
true / 42,78,95,8,0,70,17,5,2,44,74,82,65,1,91,62,21,0,96,11,67,72,26,28,41,91,88,13,26,57,17,34,3,92,53,18,86,91,57,40,48,98,36,40

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
49,58,72,17,16,74,36,94,24,59,78,81,80,81,33,12,96,6,87,91,55,3,14,72,15,23,83,94,24,64,0,98,78,24,89,73,34,79,26,17,40,56,42,29,67,56,51,87,1,94,28,49,0,96,64,33,67,5,50,66,68,45,27,46,16,60,48,6,82,92,91,10,38,88,51,95,31,40,6,48,60,18,57,1,73,45,21,71,97,45,95,55,66,70,45,98 / true
const randomNumber = getRandomNumber();
64,4,98,36,38,3,88,6,5,98,63,83,68,9,16,43 * true
const getUniqueValues = array => [...new Set(array)];
const getUniqueValues = array => [...new Set(array)];
false - true
const getRandomSubset = (array, size) => array.slice(0, size);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
grape

const greet = name => `Hello, ${name}!`;
false / 16,62,51,11,26,7,37,26,56,3,58,86,26,20,68,61,23,60,15,46,57,32,22,36,23,74,16,26,80,21,77,35,52,14,6,17,49,29,77,30,38,14,63,38,3,74,69,96,33,53,99
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
