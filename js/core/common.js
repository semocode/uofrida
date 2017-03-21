function hexShift(addr, shift) {
    var r = ((addr >> shift) & 0xff).toString(16)
    if (r.length < 2) {
        r = "0" + r;
    }
    return r;
}

function padLeft (str, pad, length) {
	if (str.length >= length) {
		return str;
	}
	var r = str;
	for (var i=str.length; i < length; i++) {
		r = pad + r;;
	}
	return r;
}

function buildPatternPushAbs(address) {
    var p = "68 "; // push
    p += hexShift(address, 0) + " ";
    p += hexShift(address, 8) + " ";
    p += hexShift(address, 16) + " ";
    p += hexShift(address, 24);
    //console.log(p);
    return p;
}

function buildPatternMovEaxAbs(address) {
    var p = "b8 "; // push
    p += hexShift(address, 0) + " ";
    p += hexShift(address, 8) + " ";
    p += hexShift(address, 16) + " ";
    p += hexShift(address, 24);
    //console.log(p);
    return p;
}

function buildPatternAddr(address) {
    var p = "";
    p += hexShift(address, 0) + " ";
    p += hexShift(address, 8) + " ";
    p += hexShift(address, 16) + " ";
    p += hexShift(address, 24);
    //console.log(p);
    return p;
}

function buildScanPattern(str) {
    var p = "";
    for (var i = 0; i < str.length; i++) {
        p += str.charCodeAt(i).toString(16) + " ";
    }
    //console.log(str + " -> " + p);
    return p;
}