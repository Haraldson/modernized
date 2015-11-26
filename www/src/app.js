// Function argument destructuring (for defaults) + template strings
function ohlala({ given = 'Hein Haraldson', family = 'Berg' } = {})
{
    // Sing name with -v Rihanna
    return `Hi there, ${given} ${family}!`;
}
console.log(ohlala({ given: 'Fleske' }));

// Destructuring of a collecton to named parameters
let collection = [
    { name: 'Monday' },
    { name: 'Tuesday' },
    { name: 'Wednesday' },
    { name: 'Thursday' },
    { name: 'Friday' },
    { name: 'Saturday' },
    { name: 'Sunday' }
];

let [monday, tuesday, ...rest] = collection;
console.log(monday, tuesday, rest);
