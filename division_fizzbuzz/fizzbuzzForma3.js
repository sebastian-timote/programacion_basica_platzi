var numeros = 100;
for (let i = 0; i <= 100; i++) {
    divisible = false
    if (esDivisible(i , 3)) {
        document.write("Fizz");
    }
    if (esDivisible(i , 5)){
        document.write("Buzz");
    }
    if (!esDivisible(i , 3) && !esDivisible(i , 5)){
        document.write(i);
    }
    document.write("<br/>");
}

function esDivisible(num, divisor) {
    if (num % divisor == 0) {
        return true;
    }else{
        return false;
    }
}