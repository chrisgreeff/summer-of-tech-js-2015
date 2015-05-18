function double(x) {
    return x * 2;
}

var triple = function(x) {
    return x * 3;
}

double(4); // 8
double(12, 'derp', 'baz', 'lol'); // 24
double(); // NaN

triple(4); // 12
triple(12, 'derp', 'baz', 'lol'); // 36
triple(); // NaN