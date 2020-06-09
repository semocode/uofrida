export function hexShift(addr: NativePointer, shift: number) {
    var r = addr.shr(shift).and(0xff).toString(16)
    if (r.length < 2) {
        r = "0" + r;
    }
    return r;
}

export function padLeft (str: string, pad: string, length: number) {
	if (str.length >= length) {
		return str;
	}
	var r = str;
	for (var i=str.length; i < length; i++) {
		r = pad + r;;
	}
	return r;
}

export function buildPatternPushAbs(address: NativePointer) {
    var p = "68 "; // push
    p += hexShift(address, 0) + " ";
    p += hexShift(address, 8) + " ";
    p += hexShift(address, 16) + " ";
    p += hexShift(address, 24);
    //console.log(p);
    return p;
}

export function buildPatternMovEaxAbs(address: NativePointer) {
    var p = "b8 "; // push
    p += hexShift(address, 0) + " ";
    p += hexShift(address, 8) + " ";
    p += hexShift(address, 16) + " ";
    p += hexShift(address, 24);
    //console.log(p);
    return p;
}

export function buildPatternAddr(address: NativePointer) {
    var p = "";
    p += hexShift(address, 0) + " ";
    p += hexShift(address, 8) + " ";
    p += hexShift(address, 16) + " ";
    p += hexShift(address, 24);
    //console.log(p);
    return p;
}

export function buildScanPattern(str: string) {
    var p = "";
    for (var i = 0; i < str.length; i++) {
        p += str.charCodeAt(i).toString(16) + " ";
    }
    //console.log(str + " -> " + p);
    return p;
}

export function byteFromInt(i: any, idx: any) {
    // doesnt give expected results on 64 bit???? so use parseInt foo below
    //return (i >> (idx * 8)) & 0xff;
    return parseInt("0x" + padLeft(i.toString(16), '0', 8).substr(-2*(idx+1), 2));
}

export function equalsInt32(a: any, b: any) {
    return (byteFromInt(a, 0) == byteFromInt(b, 0)) &&
       (byteFromInt(a, 1) == byteFromInt(b, 1)) &&
       (byteFromInt(a, 2) == byteFromInt(b, 2)) &&
       (byteFromInt(a, 3) == byteFromInt(b, 3));
}