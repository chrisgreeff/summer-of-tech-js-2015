// Variable Hoisting

var a = 'old value';

function changeValueOfA() {
    a = 'new value';

    return;

    function a() {};
}

changeValueOfA();

console.log(a); // 'old value'

// --------------------------------------------------------------

// Why??

// Gets compiled into this before execution:

var a = 'old value';

function changeValueOfA() {
    function a() {}; // Function declaration is hoisted to top of function scope.
    a = 'new value'; // Now assigning value of hoisted `a`, leaving outer `a` untouched

    return;
}

changeValueOfA();