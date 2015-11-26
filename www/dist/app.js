'use strict';

// Function argument destructuring (for defaults) + template strings
function ohlala() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$given = _ref.given;
    var given = _ref$given === undefined ? 'Hein Haraldson' : _ref$given;
    var _ref$family = _ref.family;
    var family = _ref$family === undefined ? 'Berg' : _ref$family;

    // Sing name with -v Rihanna
    return 'Hi there, ' + given + ' ' + family + '!';
}
console.log(ohlala({ given: 'Fleske' }));

// Destructuring of a collecton to named parameters
var collection = [{ name: 'Monday' }, { name: 'Tuesday' }, { name: 'Wednesday' }, { name: 'Thursday' }, { name: 'Friday' }, { name: 'Saturday' }, { name: 'Sunday' }];

var monday = collection[0];
var tuesday = collection[1];
var rest = collection.slice(2);

console.log(monday, tuesday, rest);
//# sourceMappingURL=app.js.map
