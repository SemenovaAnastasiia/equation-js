const a = parseInt(prompt('Enter a'));
const b = parseInt(prompt('Enter b'));
const c = parseInt(prompt('Enter c'));
var discriminant, x1, x2, x;

function findD(a, b, c) {
    const discriminant = (b ^ 2) - (4 * a * c);
    return discriminant;
}

function findX1(a, b, discriminant) {
    const x1 = ((b * (-1)) - Math.sqrt(discriminant)) / 2 * a;
    return x1;
}

function findX2(a, b, discriminant) {
    const x2 = ((b * (-1)) + Math.sqrt(discriminant)) / 2 * a;
    return x2;
}

function findX(a, b) {
    const x = b * (-1) / 2 * a;
    return x;
}

if (discriminant > 0) {
    alert(x1, x2);
    /*let result1 = findX1(a, b, discriminant);
    alert('x1:' + result1);
    let result2 = findX2(a, b, discriminant);
    alert('x2:' + result2);*/
}
if (discriminant === 0) {
    alert(x);
    /*let result = findX(a, b);
    alert('x:' + result);*/
}
else {
    alert('No solution, d<0');
}
