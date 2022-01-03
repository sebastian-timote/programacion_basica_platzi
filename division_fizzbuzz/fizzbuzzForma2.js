var numeros = 100,
    divisible = false;
for (let i = 0; i <= 100; i++) {
    divisible = false
    if (i % 3  == 0) {
        divisible = true;
        document.write("Fizz");
    }
    if ( i % 5 == 0){
        divisible = true;
        document.write("Buzz");
    }
    if (!divisible){
        document.write(i);
    }
    document.write("<br/>");
}