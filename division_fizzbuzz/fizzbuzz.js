var numeros = 100;
for (let i = 0; i <= 100; i++) {
    if (i % 3  == 0) {
        document.write("Fizz");
    }
    if ( i % 5 == 0){
        document.write("Buzz");
    }
    if (!(i % 5 == 0) && !(i % 3 == 0)){
        document.write(i);
    }
    document.write("<br/>");
}