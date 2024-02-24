const  glass ={
    name:'glass',
    color:'golden',
    price :12,
    isCleaned:true
}
console.log(glass);
/** All property Name  */
const keys = Object.keys(glass);
/** All property value  */
console.log(keys);
const value =Object.values(glass);
console.log(value);
/**  Array of array, two dimensional array*/
const pair = Object.entries(glass);
console.log(pair);

console.log(glass);
/** delate object items */
delete glass.isCleaned
console.log(glass);