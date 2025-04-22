"use strict";
// SPLIT
function mySplit() {
	if ( document.getElementById("area-text").value.toString().length >= 1 ) {
		let splitText;
		splitText = document.getElementById("area-text").value.toString();
		splitText = Separator(splitText);
		document.getElementById("area-text").value = splitText;
		document.getElementById("area-text").scrollTop = 0;
		};
};
// CLEAR
function myClear() {
	document.getElementById("area-text").value = "";
};
// COPY
function myCopy() {
	if ( document.getElementById("area-text").value.toString().length >= 1 ) {
		let copyText;
		copyText = document.getElementById("area-text").value.toString();
		copyText = copyText.replace(/\n/g,"\r\n");
		copyText = copyText.replace(/\r+/g,"\r");
		const copyArea = document.createElement("textarea");
		copyArea.value = copyText;
		document.body.appendChild(copyArea);
		copyArea.select();
		document.execCommand("copy");
		document.body.removeChild(copyArea);
		document.getElementById("Copy").innerHTML = "Good";
		setTimeout( function() { document.getElementById("Copy").innerHTML = "Copy"; }, 2400 );
	};
};
// THEME
let themeValue = 2;
function myTheme() {
	if ( themeValue == 1 ) {
		document.body.style.color = "#000000";
		document.body.style.backgroundColor = "#f5f5f5";
		document.getElementById("Theme").innerHTML = "Dark";
		document.getElementById("area-text").style.color = "#181818";
		document.getElementById("area-text").style.backgroundColor = "#fbfbfb";
		document.getElementById("area-text").style.border = "1px solid #999999";
		document.getElementById("area-text").style.scrollbarColor = "#c9c9c9 #fbfbfb";
		let i = 0;
		while ( i < 14 ) {
			document.getElementsByClassName("buttons")[i].style.color = "#000000";
			document.getElementsByClassName("buttons")[i].style.backgroundColor = "#fbfbfb";
			document.getElementsByClassName("buttons")[i].style.border = "1px solid #999999";
			i = i + 1;
		};
		document.getElementById("buttonSizeUp").style.borderRightStyle = "none";
		themeValue = 2;
		} else {
		document.body.style.color = "#ffffff";
		document.body.style.backgroundColor = "#303030";
		document.getElementById("Theme").innerHTML = "Light";
		document.getElementById("area-text").style.color = "#efefef";
		document.getElementById("area-text").style.backgroundColor = "#363636";
		document.getElementById("area-text").style.border = "1px solid #666666";
		document.getElementById("area-text").style.scrollbarColor = "#2b2b2b #363636";
		let i = 0;
		while ( i < 14 ) {
			document.getElementsByClassName("buttons")[i].style.color = "#ffffff";
			document.getElementsByClassName("buttons")[i].style.backgroundColor = "#363636";
			document.getElementsByClassName("buttons")[i].style.border = "1px solid #666666";
			i = i + 1;
		};
		document.getElementById("buttonSizeUp").style.borderRightStyle = "none";
		themeValue = 1;
	};
	myResponsive();
};
// FONT
const fontBase = 2;
let fontValue = fontBase;
let fontTime = Date.now();
function myFont() {
	if ( fontValue == 1 ) {
		document.getElementById("Font").innerHTML = "1";
		document.getElementById("area-text").style.fontFamily = "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif";
		setTimeout( function() { myFontTime() }, 2400 );
		fontTime = Date.now();
		fontValue = 2;
		} else if ( fontValue == 2 ) {
		document.getElementById("Font").innerHTML = "2";
		document.getElementById("area-text").style.fontFamily = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
		setTimeout( function() { myFontTime() }, 2400 );
		fontTime = Date.now();
		fontValue = 3;
		} else if ( fontValue == 3 ) {
		document.getElementById("Font").innerHTML = "3";
		document.getElementById("area-text").style.fontFamily = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Ubuntu Mono', 'Liberation Mono', 'Courier New', monospace";
		setTimeout( function() { myFontTime() }, 2400 );
		fontTime = Date.now();
		fontValue = 1;
	};
	myResponsive();
};
function myFontTime() {
	if ( Date.now() > fontTime + 2100 ) {
		document.getElementById("Font").innerHTML = "Font";
		};
	};
// FONT-SIZE
const fontSizeBase = 16;
const fontLineHeightBase = 1500;
let fontSizeValue = fontSizeBase;
let fontLineHeightValue = fontLineHeightBase;
let fontSizeTime = Date.now();
function myFontSizeUp() {
	if ( fontSizeValue < 72 ) {
		fontSizeValue = fontSizeValue + 1;
		document.getElementById("area-text").style.fontSize = fontSizeValue + "px";
		document.getElementById("buttonSizeUp").innerHTML = fontSizeValue;
		document.getElementById("buttonSizeDown").innerHTML = "&#8211;";
		setTimeout( function() { mySizeTime() }, 2400 );
		fontSizeTime = Date.now();
		myResponsive();
	};
};
function myFontSizeDown() {
	if ( fontSizeValue > 9 ) {
		fontSizeValue = fontSizeValue - 1;
		document.getElementById("area-text").style.fontSize = fontSizeValue + "px";
		document.getElementById("buttonSizeDown").innerHTML = fontSizeValue;
		document.getElementById("buttonSizeUp").innerHTML = "+";
		setTimeout( function() { mySizeTime() }, 2400 );
		fontSizeTime = Date.now();
		myResponsive();
	};
};
function mySizeTime() {
	if ( Date.now() > fontSizeTime + 2100 ) {
		document.getElementById("buttonSizeUp").innerHTML = "+";
		document.getElementById("buttonSizeDown").innerHTML = "&#8211;";
		};
	};
// RESPONSIVE
function myResponsive() {
	let widthMain = document.getElementById("main").offsetWidth;
	document.getElementById("main").style.height = "100vh";
	let heightMain = document.getElementById("main").offsetHeight;
	// MARGENS VALUES
	let valueMargen = myCalculation( widthMain, 300, 700, 0.45, 1.20 ) ;
	document.getElementById("main").style.margin = 0 + "em" + " " + valueMargen + "em" ;
	document.getElementById("menu").style.paddingTop = valueMargen + "em" ;
	document.getElementById("area").style.padding = valueMargen + "em" + " " + 0 + "em" ;
	// MENU-HIDE POSITION
	let valueMenuHide = myCalculation( widthMain, 300, 700, 0.45, 1.20 ) ;
	document.getElementById("menu-hide").style.left = valueMenuHide + "em" ;
	document.getElementById("menu-hide").style.bottom = valueMenuHide + "em" ;
	// AREA-TEXT PADDING
	let valueAreaText = myCalculation( widthMain, 300, 700, 0.30, 0.75 ) ;
	document.getElementById("area-text").style.padding = valueAreaText + "em" ;
	// BUTTON WIDTH
	let valueBut = myCalculation( widthMain, 150, 450, 3, 6 ) ;
		let i = 0;
		while ( i < 14 ) {
			document.getElementsByClassName("buttons")[i].style.width = valueBut + "em" ;
			i = i + 1;
		};
	document.getElementById("buttonSizeUp").style.width = valueBut / 2 + "em";
	document.getElementById("buttonSizeDown").style.width = valueBut / 2 + "em";
	// BUTTON FONT-SIZE
	let valueBfs = myCalculation( widthMain, 150, 450, 0.8, 1 ) ;
		i = 0;
		while ( i < 14 ) {
			document.getElementsByClassName("buttons")[i].style.fontSize = valueBfs + "rem" ;
			i = i + 1;
		};
	// SPAN MARGINS
	let valueSpa = myCalculation( widthMain, 150, 700, 0.02, 0.3 ) ;
		i = 0;
		while ( i < 6 ) {
			document.getElementsByClassName("spanBreak1")[i].style.margin = 0 + "em" + " " + valueSpa + "em" ;
			i = i + 1;
		};
		i = 0;
		while ( i < 3 ) {
			document.getElementsByClassName("spanBreak2")[i].style.margin = 0 + "em" + " " + valueSpa + "em" ;
			i = i + 1;
		};
	// AREA-TEXT HEIGHT
	let heightMenu = document.getElementById("menu").offsetHeight;
	document.getElementById("area").style.height = heightMain - heightMenu + "px";
	document.getElementById("area-text").style.height = heightMain - heightMenu - ( valueMargen * fontSizeBase * 2 ) + "px";
};
// RESPONSIVE CALCULATION
function myCalculation ( X, Xa, Xb, Ya, Yb ) {
	if ( Xa !== Xb ) {
		if ( ( Xa < Xb ) && ( X <= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa < Xb ) && ( X >= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( Xa > Xb ) && ( X >= Xa ) ) { let Y = Number ( Ya ); return Y; };
		if ( ( Xa > Xb ) && ( X <= Xb ) ) { let Y = Number ( Yb ); return Y; };
		if ( ( X > Xa && X < Xb ) || ( X > Xb && X < Xa ) ) {
			let Y = Number ( [ Yb * ( X - Xa ) + Ya * ( Xb - X ) ] / [ ( Xb - Xa ) ] );
			return Y;
		};
	} else {
		return false;
	;}
};
// MENU HIDE
let menuHideValue = 2;
function myMenuHide() {
	if ( menuHideValue == 1 ) {
	document.getElementById("menu").style.display = "flex";
	document.getElementById("menu-hide").innerHTML = "&nbsp;&#187;&nbsp;";
	menuHideValue = 2;
	myResponsive();
	} else {
	document.getElementById("menu").style.display = "none";
	document.getElementById("menu-hide").innerHTML = "&nbsp;&#171;&nbsp;";
	menuHideValue = 1;
	myResponsive();
	};
};
// COOKIES
function getCookie(name) {
	let cookieE = new RegExp("^.*("+name+"=)(\\d+).*","g");
	let cookieV = document.cookie.replace(cookieE,"$2");
	return Number(cookieV) ? cookieV : undefined;
};
function myCookie() {
	if ( getCookie("theme") ) {
		themeValue = parseInt(getCookie("theme"));
		if ( themeValue == 1 || themeValue == 2 ) {
			myTheme();
		};
	};
	if ( getCookie("font") ) {
		fontValue = parseInt(getCookie("font"));
		if ( fontValue == 1 || fontValue == 2 || fontValue == 3 ) {
			myFont();
			document.getElementById("Font").innerHTML = "Font";
		};
	};
	if ( getCookie("size") ) {
		fontSizeValue = parseInt(getCookie("size"));
		if ( fontSizeValue >= 9 && fontSizeValue <= 72 ) {
			document.getElementById("area-text").style.fontSize = getCookie("size") + "px";
		} else {
			fontSizeValue = fontSizeBase;
			document.cookie = "size=" + fontSizeValue + "; max-age=31415926 ; path=/";
			document.getElementById("area-text").style.fontSize = fontSizeValue + "px";
		};
	};
	if ( getCookie("panel") ) {
		let panelInfoValue = parseInt(getCookie("panel"));
		if ( panelInfoValue == 1 ) {
			panelInfo = false;
			myPanelInfo("no");
		} else {
			panelInfo = true;
			myPanelInfo("no");
		};
	};
};
// PANELS
let settingFont = true;
let panelInfo = true;
let panelValue = 1;
let panelSet = 1;
if ( panelInfo == true ) {
	document.getElementById("menu-back").style.display = "none";
	document.getElementById("menu-next").style.display = "inline-block";
} else {
	document.getElementById("menu-next").style.display = "none";
	document.getElementById("menu-back").style.display = "inline-block";
};
function myPanel() {
	if ( ( panelValue == 1 ) && ( panelSet == 1 ) && ( settingFont == true ) && ( document.getElementById("area-text").value.toString().search(/^(setting:|delete:|default:|display:|help:|data:|web:|theme:|panel:)/) == 0 ) ) {
		panelValue = 1;
	} else if ( ( panelValue == 1 ) && ( panelSet == 1 ) && ( settingFont == false ) && ( document.getElementById("area-text").value.toString().search(/^(help:|data:|web:|theme:|panel:)/) == 0 ) ) {
		panelValue = 1;
	} else {
		panelValue = panelValue + 1;
		if ( panelValue - 1 == 2 ) {
			if ( themeValue == 1 ) { document.cookie = "theme=2 ; max-age=31415926 ; path=/"; };
			if ( themeValue == 2 ) { document.cookie = "theme=1 ; max-age=31415926 ; path=/"; };
			if ( fontValue == 1 ) { document.cookie = "font=3 ; max-age=31415926 ; path=/"; };
			if ( fontValue == 2 ) { document.cookie = "font=1 ; max-age=31415926 ; path=/"; };
			if ( fontValue == 3 ) { document.cookie = "font=2 ; max-age=31415926 ; path=/"; };
			document.cookie = "size=" + fontSizeValue + "; max-age=31415926 ; path=/";
		};
		if ( panelInfo == true ) {
			if ( panelValue >= 4 ) { panelValue = 1; };
		} else {
			if ( panelValue >= 3 ) { panelValue = 1; };
		};
	};
	// PANEL 1
	if ( panelValue == 1 ) {
		document.getElementById("menu-B").style.display = "none";
		document.getElementById("menu-C").style.display = "none";
		document.getElementById("menu-A").style.display = "inline-block";
		// BASIC COMMANDS
		if ( ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^help:/) == 0 ) ) {
			myHelp();
		};
		if ( ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^data:/) == 0 ) ) {
			myData();
		};
		if ( ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^web:/) == 0 ) ) {
			myWeb();
		};
		if ( ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^theme:/) == 0 ) ) {
			if ( themeValue == 2 ) {
				document.getElementById("area-text").value = "Dark Theme Activated";
				document.cookie = "theme=2 ; max-age=31415926 ; path=/";
				themeValue = 2;
				myTheme();
			} else {
				document.getElementById("area-text").value = "Light Theme Activated";
				document.cookie = "theme=1 ; max-age=31415926 ; path=/";
				themeValue = 1;
				myTheme();
			};
		};
		if ( ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^panel:/) == 0 ) ) {
			myPanelInfo();
		};
		// ADVANCED COMMANDS
		if ( ( settingFont == true ) && ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^setting:/) == 0 ) ) {
			let settingCheck = 1;
			let settingValue;
			settingValue = document.getElementById("area-text").value.toString().replace(/^setting:/,"").replace(/(\n).*/g,"");
			settingValue = settingValue.trim().replace(/[^A-Za-z0-9\,\ \-]/g,"").replace(/,{2,}/g,",").replace(/^,/,"").replace(/,$/,"");
			if ( settingCheck == 1 ) {
				if ( settingValue.replace(/[^,]/g,"").length !== 2 ) {
					document.getElementById("area-text").value = "" + 
					"setting:" + settingValue + "\n\n" + 
					"Just 3 correct values are accepted" + "\n\n" + 
					"Separated by 2 commas" + "\n\n" + 
					"For example :" + "\n\n" + 
					"Open Sans,16,1500" + "\n\n" + 
					"See help:";
				} else {
					settingCheck = 2;
				};
			};
			let settingLista = settingValue.split(",");
			if ( settingCheck == 2 && settingLista[0] == "n" ) { settingCheck = 3; };
			if ( settingCheck == 2 ) {
				if ( settingLista[0].length > 45 ) {
					document.getElementById("area-text").value = "" + 
					"setting:" + settingValue + "\n\n" + 
					"Error in : " + settingLista[0] + "\n\n" + 
					"A single font with a maximum of 45 characters" + "\n\n" + 
					"Font characters : A-Z a-z 0-9 - space";
				} else {
					settingCheck = 3;
				};
			};
			if ( settingCheck == 3 && settingLista[1] == "n" ) { settingCheck = 4; };
			if ( settingCheck == 3 ) {
				if ( !Number(settingLista[1]) || settingLista[1] < 9 || settingLista[1] > 72 ) {
					document.getElementById("area-text").value = "" + 
					"setting:" + settingValue + "\n\n" + 
					"Error in : " + settingLista[1] + "\n\n" + 
					"Font-Size > 9 and < 72" + "\n\n" + 
					"Note : ( default = 16 ) and ( n = non-setting > Open Sans,n,1500 )";
				} else {
					settingCheck = 4;
				};
			};
			if ( settingCheck == 4 && settingLista[2] == "n" ) { settingCheck = 5; };
			if ( settingCheck == 4 ) {
				if ( !Number(settingLista[2]) || settingLista[2] < 1000 || settingLista[2] > 2000 ) {
					document.getElementById("area-text").value = "" + 
					"setting:" + settingValue + "\n\n" + 
					"Error in : " + settingLista[2] + "\n\n" + 
					"Line-Height > 1000 and < 2000" + "\n\n" + 
					"Note : ( default = 1500 ) and ( n = non-setting > Open Sans,n,n )";
				} else {
					settingCheck = 5;
				};
			};
			if ( settingCheck == 5 ) {
				if ( settingLista[0] == "n" && settingLista[1] == "n" && settingLista[2] == "n" ) {
					document.getElementById("area-text").value = "" + 
					"setting:" + settingValue + "\n\n" + 
					"At least one value must be non-n" + "\n\n" + 
					"For example :" + "\n\n" + 
					"n,n,1500";
				} else {
					settingCheck = 6;
				};
			};
			if ( settingCheck == 6 ) {
				document.cookie = "setting=" + encodeURIComponent(settingValue) + ",~" + "; max-age=31415926 ; path=/";
				document.getElementById("area-text").value = "Accepted : " + settingValue;
				mySetting();
			};
		};
		if ( ( settingFont == true ) && ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^delete:/) == 0 ) ) {
			if ( document.cookie.search(/setting=/) !== -1 ) {
				let settingDecode = decodeURIComponent(document.cookie);
				let settingValue = settingDecode.replace(/^.*(setting=)(.*)(,~).*/,"$2");
				document.cookie = "setting=null ; max-age=1 ; path=/";
				document.getElementById("area-text").value = "Deleted : " + settingValue;
				fontLineHeightValue = fontLineHeightBase;
				document.getElementById("area-text").style.lineHeight = fontLineHeightValue / 1000 + "em";
				myCookie();
			} else {
				document.getElementById("area-text").value = "" + 
				"Setting Font ( Advanced )" + "\n\n" + 
				"No Setting Font" + "\n\n" + 
				"See help:";
			};
		};
		if ( ( settingFont == true ) && ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^default:/) == 0 ) ) {
			document.cookie = "setting=null ; max-age=1 ; path=/";
			fontValue = fontBase;
			document.cookie = "font=1 ; max-age=31415926 ; path=/";
			fontSizeValue = fontSizeBase;
			document.cookie = "size=" + fontSizeValue + "; max-age=31415926 ; path=/";
			fontLineHeightValue = fontLineHeightBase;
			document.getElementById("area-text").style.lineHeight = fontLineHeightValue / 1000 + "em";
			document.getElementById("area-text").value = "Changed : sans-serif,16,1500";
			myCookie();
		};
		if ( ( settingFont == true ) && ( panelSet == 1 ) && ( document.getElementById("area-text").value.toString().search(/^display:/) == 0 ) ) {
			let fontValueDisplay;
			let fontSizeValueDisplay;
			let settingValueDisplay;
			if ( fontValue == 2 ) { fontValueDisplay = "Font 1 ( sans-serif )" };
			if ( fontValue == 3 ) { fontValueDisplay = "Font 2 ( serif )" };
			if ( fontValue == 1 ) { fontValueDisplay = "Font 3 ( monospace )" };
			if ( getCookie("size") ) {
				fontSizeValueDisplay = getCookie("size");
			} else {
				fontSizeValueDisplay = 16;
			};
			if ( document.cookie.search(/setting=/) !== -1 ) {
				let settingDecode = decodeURIComponent(document.cookie);
				let settingValue = settingDecode.replace(/^.*(setting=)(.*)(,~).*/,"$2");
				settingValueDisplay = settingValue;
			} else {
				settingValueDisplay = "- No Setting Font. See help:";
			};
			document.getElementById("area-text").value = "" + 
			"Setting Font ( Advanced )" + "\n\n" + 
			settingValueDisplay + "\n\n" + 
			"Setting Font ( Basic )" + "\n\n" + 
			"- Font Family : " + fontValueDisplay + "\n\n" + 
			"- Font Size : " + fontSizeValueDisplay + "\n\n" + 
			"- Line Height : 1500 ( 1.5 )";
		};
	};
	// PANEL 2
	if ( panelValue == 2 ) {
		panelSet = 2;
		document.getElementById("menu-A").style.display = "none";
		document.getElementById("menu-C").style.display = "none";
		document.getElementById("menu-B").style.display = "inline-block";
	};
	// PANEL 3
	if ( panelInfo == true && panelValue == 3 ) {
		panelSet = 2;
		document.getElementById("menu-A").style.display = "none";
		document.getElementById("menu-B").style.display = "none";
		document.getElementById("menu-C").style.display = "inline-block";
	};
	if ( panelValue == 1 ) { panelSet = 1; };
};
// BASIC COMMANDS
// PANEL 3
function myPanelInfo(no) {
	if ( panelInfo == true ) {
		panelInfo = false;
		document.cookie = "panel=2 ; max-age=31415926 ; path=/";
		document.getElementById("menu-next").style.display = "none";
		document.getElementById("menu-back").style.display = "inline-block";
		if ( no == "no" ) {
		} else {
			document.getElementById("area-text").value = "Info Panel Disabled";
		};
	} else {
		panelInfo = true;
		document.cookie = "panel=1 ; max-age=31415926 ; path=/";
		document.getElementById("menu-back").style.display = "none";
		document.getElementById("menu-next").style.display = "inline-block";
		if ( no == "no" ) {
		} else {
			document.getElementById("area-text").value = "Info Panel Activated";
		};
	};
};
// HELP
const helpTextA = new String (
	"Help:" + "\n\n" + 
	"Basic Commands : Enter ( help: | data: | web: | theme: | panel: ) + click the 'Panel' button" + "\n\n" + 
	"help: general help" + "\n" + 
	"data: about the project" + "\n" + 
	"web: information about us" + "\n\n" + 
	"« | » ( show or hide the menu buttons )" + "\n" + 
	"theme: activate or deactivate the dark or light theme" + "\n" + 
	"panel: activate or deactivate info panel ( help, data, web )" + "\n"
);
const helpTextB = new String (
	"Advanced Commands : Enter ( setting: | delete: | default: | display: ) + click the 'Panel' button" + "\n\n" + 
	"For example: setting:Open Sans,16,1500 ( + click the 'Panel' button )" + "\n" + 
	"Just 3 correct values are accepted, and separated by 2 commas" + "\n" + 
	"The user must have the 'Regular' font installed on their device" + "\n\n" + 
	"font-name < 45 characters ( characters : A-Z a-z 0-9 - space ) and ( n = non-setting > n,16,1500 )" + "\n" + 
	"font-size > 9 and < 72 . Note : ( default = 16 ) and ( n = non-setting > Open Sans,n,1500 )" + "\n" + 
	"line-height > 1000 and < 2000 . Note : ( default = 1500 ) and ( n = non-setting > Open Sans,n,n )" + "\n\n" + 
	"delete: ( delete advanced font settings but not basic font settings )" + "\n" + 
	"default: ( delete advanced font settings and basic font settings )" + "\n" + 
	"display: ( shows advanced font settings and basic font settings )" + "\n"
);
function myHelp() {
	if ( settingFont == false ) {
		document.getElementById("area-text").value = helpTextA;
	} else {
		document.getElementById("area-text").value = helpTextA + "\n" + helpTextB;
	};
};
// DATA
function myData() {
	document.getElementById("area-text").value = "" + 
	"Syllable Separator:" + "\n\n" + 
	"The application separates into syllables the words that contain the letters: aeiou áéíóúü bcdfghjklmnñpqrstvwxyz." + "\n\n" + 
	"Except for the following exceptions:" + "\n" + 
	"• Words ( non-native or special ) that begin with . ( dot ) For example: .beatles, .jeans, etc." + "\n" + 
	"• Words containing the special characters ( # @ ) For example: #tarde, no@che, etc." + "\n" + 
	"• Words enclosed in braces { ... } For example: a.que.lla  fru.ta  { roja y madura }" + "\n\n" + 
	"The application processes words that are partially separated into syllables. For example: sub-lunar, to sub.lu.nar" + "\n\n" + 
	"The application also contains a dictionary of words that do not follow the general rules. For example: fluía, to flu.í.a" + "\n" + 
	"There are several words that do not follow these rules, so the content of this dictionary will expand over time." + "\n"
};
// WEB
function myWeb() {
	document.getElementById("area-text").value = "" + 
	"About Us:" + "\n\n" + 
	"Project : https://github.com/harmotus/syllable-separator" + "\n\n" + 
	"Author : Harmotus" + "\n\n" + 
	"License : MIT";
};
// ADVANCED COMMANDS
function mySetting() {
	if ( settingFont == true && ( document.cookie.search(/setting=/) !== -1 ) ) {
		let settingDecode = decodeURIComponent(document.cookie);
		let settingValue = settingDecode.replace(/^.*(setting=)(.*)(,~).*/,"$2");
		let settingLista = settingValue.trim().split(",");
		// FONT FAMILY
		if ( settingLista[0] !== "n" ) {
			document.getElementById("area-text").style.fontFamily = "'" + settingLista[0] + "'" + ", system-ui";
		};
		// FONT SIZE
		if ( settingLista[1] !== "n" ) {
			fontSizeValue = Number(settingLista[1]);
			document.getElementById("area-text").style.fontSize = fontSizeValue + "px";
		};
		// FONT LINE-HEIGHT
		if ( settingLista[2] !== "n" ) {
			fontLineHeightValue = Number(settingLista[2]);
			document.getElementById("area-text").style.lineHeight = fontLineHeightValue / 1000 + "em";
		};
	};
};
// START
myCookie();
mySetting();
myResponsive();
window.addEventListener( "resize", myResponsive );