function outerFunc(num1) {
   return function innerFunc(num2) {
        console.log(num1 + num2);

    }
}

let retFunc = outerFunc(10);
retFunc(5);
