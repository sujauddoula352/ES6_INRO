// const numbers =[4, 5, 7, 8, 9, 10];
/**function doubleIt(num){
console.log('num now', num);
return num * 2;
}
const result =numbers.map(doubleIt);
console.log(result);*/


// for ( const num of numbers){
    //     const double = num * 2;
    //     doubled.push(double);
    
    // }
    // console.log(doubled);

    // const doubleto=(num) => num *2;
    // const result = numbers.map(num => num * 2 );
    // console.log(result);

    
    /** recap map */
    const monay =[50,70,80,40,30,46];
    // const earnd = monay.map(n=> n - 5);
    const earnd = monay.map(n=> n * 5);
    console.log(earnd);

    const friends = ['hasnat', 'hira moni', 'Sujauddoul','Akask']
    const lengths = friends.map(frnd => frnd.length);
    console.log(lengths);
    const index = friends.map( frds => frds[0]);
    console.log(index)