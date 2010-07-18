// 
// Dalliance Genome Explorer
// (c) Thomas Down 2006-2010
//
// utils.js: odds, sods, and ends.
//

var NUM_REGEXP = new RegExp('[0-9]+');

function stringToNumbersArray(str) {
    var nums = new Array();
    var m;
    while (m = NUM_REGEXP(str)) {
        nums.push(m[0]);
        str=str.substring(m.index + (m[0].length));
    }
    return nums;
}

var STRICT_NUM_REGEXP = new RegExp('^[0-9]+$');

function stringToInt(str) {
    str = str.replace(new RegExp(',', 'g'), '');
    if (!STRICT_NUM_REGEXP.test(str)) {
	alert("Don't understand '" + str + "'");
	return null;
    }
    return str|0;
}


function pusho(obj, k, v) {
    if (obj[k]) {
	obj[k].push(v);
    } else {
	obj[k] = [v];
    }
}

function pushnewo(obj, k, v) {
    var a = obj[k];
    if (a) {
	for (var i = 0; i < a.length; ++i) {    // indexOf requires JS16 :-(.
	    if (a[i] == v) {
		return;
	    }
	}
	a.push(v);
    } else {
	obj[k] = [v];
    }
}