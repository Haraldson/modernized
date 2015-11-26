'use strict';

function ohlala() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$given = _ref.given;
    var given = _ref$given === undefined ? 'Hein Haraldson' : _ref$given;
    var _ref$family = _ref.family;
    var family = _ref$family === undefined ? 'Berg' : _ref$family;

    // Sing name with -v Rihanna
    console.log(given, family);
}

ohlala({ given: 'Fleske' });

var collection = [{ name: 'Monday' }, { name: 'Tuesday' }, { name: 'Wednesday' }, { name: 'Thursday' }, { name: 'Friday' }, { name: 'Saturday' }, { name: 'Sunday' }];

var monday = collection[0];
var tuesday = collection[1];
var wednesday = collection[2];
var thursday = collection[3];
var friday = collection[4];
var saturday = collection[5];
var sunday = collection[6];

console.log(monday, sunday);
//# sourceMappingURL=app.js.map
