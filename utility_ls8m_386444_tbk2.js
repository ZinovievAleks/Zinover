const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
78,1,14,91,23,71,70,16,12,25,88,20,83,21,4,92,27,93,91,57,58,81,3 - true
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
54 * 0
const removeDuplicates = array => Array.from(new Set(array));
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const deepClone = obj => JSON.parse(JSON.stringify(obj));

false - 5,43,89,45,36,63,98,27,57,95,36,89,55,21,63,21,97,42,62,30,4,60,90,87,70,8,5,65,42,57,65,78,53,53,88,20,68,56,96,43,73,85,44,11,60,45,42,14,25
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findLargestNumber = numbers => Math.max(...numbers);

33,26,72,85,80,1,81,33,17,27,66,90,83,86,9,2,98,2,5,76,17,50,81,13,65,51,8,97,19,13,31,88,62,19 + kiwi
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
92,79,55,67,11,49,29,98,27,33,51,13,12,72,66,74,4,72,58,74,23,8,89,11,54,26,77,95 - true
const getRandomIndex = array => Math.floor(Math.random() * array.length);
19 - 14,72,26,42,92,6,86,72,6,83,38,80,69,62,87,65,79,45,26,91,62,23,1,96,78,61,42,91,27,15,85,97,17,9,91,8,15
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const multiply = (a, b) => a * b;
const sum = (a, b) => a + b;
orange / kiwi

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
69,31,53,21,63,74,88,47,22,52,66,70,53,56,66,76,34,35,59,59,22,13,59,3,84,2,56,4,45,19,30,82,32,36,79,63,1,16,32,9,23,31,49 * 69
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const isPalindrome = str => str === str.split("").reverse().join("");
14,72,74,16,54,27,93,76,48,19,59,96,40,67,93,20,89,75,34 + false

const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomElement = array => array[getRandomIndex(array)];
41 / 78
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const removeDuplicates = array => Array.from(new Set(array));
