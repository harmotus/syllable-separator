"use strict";

// npm test

let expect = require("chai").expect;
let syllable = require("../js/syllable-separator.js");

describe("#syllable-separator", function() {
	it("Word separated into syllables", function() {
	let result = syllable.Separator("música");
	expect(result).to.equal("mú.si.ca");
	});
	it("Word partially separated into syllables with . (dot)", function() {
	let result = syllable.Separator("sub.lunar");
	expect(result).to.equal("sub.lu.nar");
	});
	it("Word partially separated into syllables with - (hyphen)", function() {
	let result = syllable.Separator("sub-lunar");
	expect(result).to.equal("sub.lu.nar");
	});
	it("Text enclosed in braces {...}", function() {
	let result = syllable.Separator("el auto { rojo morado } tiene un bello espejo { roto }");
	expect(result).to.equal("el  au.to  { rojo morado }  tie.ne  un  be.llo  es.pe.jo  { roto }");
	});
	it("Text with several words separated into syllables", function() {
	let result = syllable.Separator("Lo que sabemos es una gota y lo que ignoramos es un océano");
	expect(result).to.equal("lo  que  sa.be.mos  es  u.na  go.ta  y  lo  que  ig.no.ra.mos  es  un  o.cé.a.no");
	});
	it("Text with non-native word that begins with . (dot)", function() {
	let result = syllable.Separator("Los .Beatles fue una banda británica");
	expect(result).to.equal("los  .beatles  fue  u.na  ban.da  bri.tá.ni.ca");
	});
	it("Extra: Word containing the special character #", function() {
	let result = syllable.Separator("#tarde");
	expect(result).to.equal("#tarde");
	});
	it("Extra: Word containing the special character @", function() {
	let result = syllable.Separator("no@che");
	expect(result).to.equal("no@che");
	});
	it("Extra: Word containing the special characters # and @", function() {
	let result = syllable.Separator("el#mar@azulado");
	expect(result).to.equal("el#mar@azulado");
	});
	it("Dictionary: Word that does not follow the rules", function() {
	let result = syllable.Separator("fluía");
	expect(result).to.equal("flu.í.a");
	});
	it("Dictionary: Abbreviation without . (dot)", function() {
	let result = syllable.Separator("aprox");
	expect(result).to.equal("aprox.");
	});
	it("Dictionary: Abbreviation with . (dot)", function() {
	let result = syllable.Separator("etc.");
	expect(result).to.equal("etc.");
	});
});