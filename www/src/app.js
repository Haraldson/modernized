function ohlala({ given = 'Hein Haraldson', family = 'Berg' } = {})
{
    // Sing name with -v Rihanna
    console.log(given, family);
}

ohlala({ given: 'Fleske' });

let collection = [
    { name: 'Monday' },
    { name: 'Tuesday' },
    { name: 'Wednesday' },
    { name: 'Thursday' },
    { name: 'Friday' },
    { name: 'Saturday' },
    { name: 'Sunday' }
];

let [monday, tuesday, wednesday, thursday, friday, saturday, sunday] = collection;
console.log(monday, sunday);
