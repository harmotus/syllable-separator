'use strict';

// node usage.js

let text = 'Lo que sabemos es una gota y lo que ignoramos es un océano';
let syllable = require('../js/syllable-separator.js');
let splittext = syllable.Separator(text);

console.log(splittext);

// lo  que  sa.be.mos  es  u.na  go.ta  y  lo  que  ig.no.ra.mos  es  un  o.cé.a.no
