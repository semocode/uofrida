var Types = {
    byteFromInt: function (i, idx) {
        // doesnt give expected results on 64 bit???? so use parseInt foo below
        //return (i >> (idx * 8)) & 0xff;
        return parseInt("0x" + padLeft(i.toString(16), '0', 8).substr(-2*(idx+1), 2));
    }
};