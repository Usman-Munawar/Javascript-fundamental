const pkg = require('./01-variables.js');
const { printName, printPlayerName, printGlobalName, updateScore, printTeamName } = pkg;

const pkg1 = require('./02-data-types.js');
const { printPlayerName: _printPlayerName } = pkg1;

const file3 = require("./03-datatypes-conversion.js");

printName();
printPlayerName();
printGlobalName();
updateScore();
printTeamName();
_printPlayerName();
file3();
