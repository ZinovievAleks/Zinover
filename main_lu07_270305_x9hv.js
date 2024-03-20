48 * 43
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
orange

const getRandomSubset = (array, size) => array.slice(0, size);

const removeDuplicates = array => Array.from(new Set(array));

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
24 - 77
const randomNumber = getRandomNumber();
true + grape
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
